/**
 * Simple in-memory rate limiter using a sliding-window counter.
 * For production, replace with a Redis-backed solution.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

interface RateLimitOptions {
  /** Time window in milliseconds */
  windowMs: number;
  /** Maximum requests allowed per window */
  max: number;
}

export function createRateLimiter(options: RateLimitOptions) {
  const hits = new Map<string, RateLimitRecord>();

  // Periodically clean stale entries to prevent memory leaks
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of hits) {
      if (now > record.resetTime) {
        hits.delete(key);
      }
    }
  }, options.windowMs * 2);

  // Prevent the interval from keeping the process alive in serverless
  if (typeof cleanupInterval === "object" && "unref" in cleanupInterval) {
    cleanupInterval.unref();
  }

  return {
    check(identifier: string): { success: boolean; remaining: number } {
      const now = Date.now();
      const record = hits.get(identifier);

      if (!record || now > record.resetTime) {
        hits.set(identifier, { count: 1, resetTime: now + options.windowMs });
        return { success: true, remaining: options.max - 1 };
      }

      if (record.count >= options.max) {
        return { success: false, remaining: 0 };
      }

      record.count++;
      return { success: true, remaining: options.max - record.count };
    },
  };
}

/** Extract client IP from request headers */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

// Default rate limiter for public form endpoints: 5 requests per 60 seconds
export const formRateLimiter = createRateLimiter({
  windowMs: 60_000,
  max: 5,
});

