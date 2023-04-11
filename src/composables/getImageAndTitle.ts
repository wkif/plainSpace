import type { queryContentResType } from '../types/base'
// 生成随机颜色
const createColor = function (): string {
  const color = Math.floor(Math.random() * 16777215).toString(16)
  return `#${color}`
}
const getImageAndTitle = async function (path: string): Promise<queryContentResType> {
  const res: queryContentResType = {
    cover: '',
    title: '',
    path,
    date: '',
    active: false,
    color_1: createColor(),
    color_2: createColor(),
    deg_1: Math.random() * (65 - 5) + 5,
    deg_2: Math.random() * (80 - 4) - 80,
    top: false,
  }
  const articles = await queryContent(path).findOne()
  res.cover = articles.cover ? articles.cover : 'https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204192117290.jpg'
  res.title = articles.title!
  res.date = articles.date ? `${articles.date.split('T')[0]} ${articles.date.split('T')[1].split('.')[0]}` : 'without date'
  res.top = articles.top ? articles.top : false
  return res
}
export default getImageAndTitle
