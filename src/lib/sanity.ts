import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'so8fb28i', // From sanity.cli.ts
    dataset: 'image', // From sanity.cli.ts
    useCdn: true, // Use Edge CDN for faster responses
    apiVersion: '2023-05-03', // Use current date for API version
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
