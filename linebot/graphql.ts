import gql from 'graphql-tag'

enum Category {
  AQUARIUM = 'Aquarium',
  SHRIME = 'Shrime',
  ONSEN = 'Onsen',
  UNKNOWN = 'Unknown',
}

export const query = (category: string) => gql(`
query {
  get${category} {
    title
    url
    summary
  }
}`)

export interface Result {
  getAquarium?: Amusument[]
  getShrime?: Amusument[]
  getOnsen?: Amusument[]
}

export interface Amusument {
  title: string
  url: string
  summary: string
}

export const getCategory = (text: string): string => {
  switch(text) {
    case 'オンライン水族館':
      return Category.AQUARIUM
    case 'オンライン神社':
      return Category.SHRIME
    case 'オンライン温泉':
      return Category.ONSEN
    default:
      return Category.UNKNOWN
  }
}

