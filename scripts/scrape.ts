import fetch from 'isomorphic-fetch'
import chunk from 'lodash/chunk'
import gql from 'graphql-tag'
import { client } from '../src/client'
import { load } from 'cheerio'

export const scrapeMountains = () => scrape('https://en.wikipedia.org/wiki/List_of_mountains_by_elevation')
insertAllMountains()

export async function scrape(url: string) {
  const html = await (await fetch(url)).text()
  const $ = load(html)
  const names: string[] = []
  const meters: number[] = []
  const feet: number[] = []
  const locations: string[] = []
  $('tr td:nth-child(1)').each(function () {
    names.push($(this).text().trim())
  })
  $('tr td:nth-child(2)').each(function () {
    meters.push(Number($(this).text().trim().replace(/,/g, '')))
  })
  $('tr td:nth-child(3)').each(function () {
    feet.push(Number($(this).text().trim().replace(/,/g, '')))
  })
  $('tr td:nth-child(4)').each(function () {
    locations.push($(this).text().trim())
  })
  return names.map((name, i) => ({
    feet: feet[i],
    location: locations[i],
    meters: meters[i],
    name,
  }))
}

export async function insertAllMountains() {
  const mountains = await scrapeMountains()
  const chunks = chunk(mountains, 100)
  for (const chunk in chunks) {
    console.log(`Insert page ${Number(chunk) + 1} of ${chunks.length}`)
    await insertMountains(chunks[chunk])
  }
}

const insertMountainsMutation = gql`
  mutation insertManyMountains($mountains: [MountainInsert!]!) {
    insertManyMountains(mountains: $mountains) {
      id
    }
  }
`

export async function insertMountains(mountains: any[]) {
  const data = await client.mutate({
    mutation: insertMountainsMutation,
    variables: { mountains },
  })
  if (data.errors) {
    throw data.errors
  }
  return data
}
