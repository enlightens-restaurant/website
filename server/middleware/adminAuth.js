const crypto = require("crypto");

const TOKEN_TTL_MS = 1000 * 60 * 60 * 12;

function getSecret() {
  return process.env.ADMIN_TOKEN_SECRET || process.env.ADMIN_PASSWORD || "change-me";
}

function encode(payload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function decode(value) {
  return JSON.parse(Buffer.from(value, "base64url").toString("utf8"));
}

function signPayload(payload) {
  return crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");
}

function createAdminToken() {
  const payload = encode({
    role: "admin",
    exp: Date.now() + TOKEN_TTL_MS,
  });
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

function verifyAdminToken(token) {
  if (!token || !token.includes(".")) return false;

  const [payload, signature] = token.split(".");
  const expected = signPayload(payload);

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return false;
  }

  const decoded = decode(payload);
  return decoded.role === "admin" && decoded.exp > Date.now();
}

function requireAdminAuth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length)
    : null;

  if (!verifyAdminToken(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

module.exports = {
  createAdminToken,
  requireAdminAuth,
  verifyAdminToken,
};
