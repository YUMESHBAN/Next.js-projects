import { createClient } from '@sanity/client'
import { sanityEnv } from '../../sanity/config/environment'

export const sanityClient = createClient({
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: false, // server-side requests should not use CDN if you want drafts
  token: sanityEnv.token, // must be set for authenticated requests
})

// Corrected fetch function
export const clientFetch = async <T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T> => {
  return sanityClient.fetch<T>(query, params, { cache: 'no-store' })
}
