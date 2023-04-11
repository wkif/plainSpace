interface queryContentResType {
  cover: string
  title: string
  path: string
  date: string
  active: boolean
  color_1: string
  color_2: string
  deg_1: number
  deg_2: number
  top: boolean
}
interface BookType {
  name: string
  image: string
  url?: string
}
export type { queryContentResType, BookType }
