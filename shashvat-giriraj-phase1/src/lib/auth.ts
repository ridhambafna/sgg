import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export type AdminRole =
  | "super_admin"
  | "event_manager"
  | "registration_manager"
  | "gallery_manager"
  | "content_editor"
  | "viewer";

export interface AdminSession {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
}

const COOKIE_NAME = "sgg_admin_token";
const SECRET_KEY = new TextEncoder().encode(
  process.env.AUTH_SECRET || "default-shashvat-giriraj-super-secret-key-32-chars-min"
);

export async function signSession(payload: AdminSession): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(SECRET_KEY);
}

export async function verifySession(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as unknown as AdminSession;
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function setAdminSessionCookie(session: AdminSession) {
  const token = await signSession(session);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

/**
 * Server-side route authorization helper for API routes
 */
export async function requireAuth(
  req?: NextRequest,
  allowedRoles?: AdminRole[]
): Promise<{ session: AdminSession } | NextResponse> {
  let token: string | undefined;

  if (req) {
    token = req.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      const authHeader = req.headers.get("authorization");
      if (authHeader?.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }
  } else {
    const cookieStore = await cookies();
    token = cookieStore.get(COOKIE_NAME)?.value;
  }

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Please sign in." },
      { status: 401 }
    );
  }

  const session = await verifySession(token);
  if (!session) {
    return NextResponse.json(
      { success: false, message: "Session expired or invalid." },
      { status: 401 }
    );
  }

  if (allowedRoles && allowedRoles.length > 0) {
    if (session.role !== "super_admin" && !allowedRoles.includes(session.role)) {
      return NextResponse.json(
        { success: false, message: "Forbidden: Insufficient permissions." },
        { status: 403 }
      );
    }
  }

  return { session };
}

