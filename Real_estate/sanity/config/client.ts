import {createClient} from '@sanity/client'
import {sanityEnv} from './environment'

export const sanityClient = createClient({
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: sanityEnv.useCdn,
  token: sanityEnv.token,
})

