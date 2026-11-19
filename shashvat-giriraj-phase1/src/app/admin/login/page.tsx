"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to sign in");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F7F2] px-4">
      <div className="w-full max-w-md border border-[#E6E4DC] bg-white p-8 sm:p-10">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F0E9] text-[#25251F]">
            <Lock size={20} />
          </div>
          <h1 className="mt-4 font-heading text-3xl">Admin Portal</h1>
          <p className="mt-2 text-xs tracking-wider text-[#77766F] uppercase">
            Shashvat Giriraj Management
          </p>
        </div>

        {error && (
          <div className="mt-6 border border-red-200 bg-red-50 p-3 text-center text-xs text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-[11px] tracking-wider text-[#77766F] uppercase">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@shashvatgiriraj.org"
              className="mt-1 w-full border border-[#E6E4DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#25251F]"
            />
          </div>

          <div>
            <label className="block text-[11px] tracking-wider text-[#77766F] uppercase">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="mt-1 w-full border border-[#E6E4DC] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#25251F]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 bg-[#25251F] py-3.5 text-xs tracking-wider text-white transition-colors hover:bg-[#44443C] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                AUTHENTICATING...
              </>
            ) : (
              "SIGN IN TO PORTAL"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-[11px] text-[#77766F]">
          Authorized team members only. Activity is logged.
        </p>
      </div>
    </div>
  );
}

