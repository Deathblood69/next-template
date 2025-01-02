const secretKey = process.env.SESSION_SECRET ?? 'S3CR3T'
export const ENCODED_KEY = new TextEncoder().encode(secretKey)
