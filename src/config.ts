import filmData from './data/filmData'
import bookshelfData from './data/bookshelfData'
interface InfoType {
  title: string
  userImg: string
  username: string
  description: string
  beian?: string
  github: {
    name: string
    link: string
  }
  address: string
  email: string
  studyAndWorkExperience: Array<{
    id: number
    time: string
    title: string
    desc: string
    companyOrSchool?: string
    address?: string
  }>
  topImage: string
}
interface ValineType {
  appId: string
  appKey: string
  serverURLs: string
  avatar: string
  visitor: boolean
  recordIP: boolean
  placeholder: string
}

const info: InfoType = {
  title: 'plainSpace',
  userImg: 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304111544513.png',
  username: 'kif',
  description: 'plainSpace 是基于nuxt3开发的个人静态博客',
  github: {
    name: 'plainSpace',
    link: 'https://github.com/wkif/plainSpace',
  },
  address: '湖南-长沙',
  topImage: 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304111536374.png',
  email: 'kif101001000@163.com',
  studyAndWorkExperience: [
    {
      id: 0,
      time: '2019-2023',
      title: '学生',
      companyOrSchool: 'XTU',
      address: '湖南-湘潭',
      desc: '网络工程专业',
    },
  ],
  beian: '湘ICP备2021015742号-1',
}

// valine 设置  https://valine.js.org/
const valineData: ValineType = {
  appId: 'HToGiwqeumGA997jRlhmgaxQ-gzGzoHsz',
  appKey: 'N4OryBiSWIwS8P2b31fCZXmJ',
  serverURLs: 'https://htogiwqe.lc-cn-n1-shared.com',
  avatar: 'wavatar',
  visitor: true,
  recordIP: true,
  placeholder: '说说你想法',
}
Object.assign(info, bookshelfData, filmData)
export default { info, valineData }
