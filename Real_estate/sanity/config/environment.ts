const FALLBACK_PROJECT_ID = 'p1jg6qzq'
const FALLBACK_DATASET = 'production'
const FALLBACK_API_VERSION = '2024-10-01'
const DEV_FALLBACK_TOKEN =
  process.env.NODE_ENV === 'production'
    ? undefined
    : 'sknrcdzimAaLqLyJft1HWKLyhzKVUvQ1yfpj8oUFV8xIOSr6GVS7iQRi2y94vzawLeXEJvxpeGrMQK0xcNkgLd9CaNH5wYCFVRWvlu8zyHMXAq6uaOmJ8EPPdmVT8pISt4ANkKK46JXkMMw0Un5Dy1UED2jypKDTSPMLNVErwgvBKHH6SYrz'

const sanitizeId = (value?: string | null) => value?.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')

const envProjectId =
  sanitizeId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) ||
  sanitizeId(process.env.SANITY_STUDIO_PROJECT_ID) ||
  FALLBACK_PROJECT_ID

const envDataset =
  sanitizeId(process.env.NEXT_PUBLIC_SANITY_DATASET) ||
  sanitizeId(process.env.SANITY_STUDIO_DATASET) ||
  FALLBACK_DATASET

export const sanityEnv = {
  projectId: envProjectId,
  dataset: envDataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() ?? FALLBACK_API_VERSION,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN?.trim() || DEV_FALLBACK_TOKEN,
}

console.log("This is PID:",envProjectId)

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn(
    `Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable, falling back to "${FALLBACK_PROJECT_ID}".`,
  )
}

