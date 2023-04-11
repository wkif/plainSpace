interface FilmType {
  filmList: Array<{ name: string; image: string; time: string; haveSeen: boolean }>
}
const filmData: FilmType = {
  filmList: [
    {
      name: '花束みたいな恋をした',
      image: 'https://picx.zhimg.com/v2-bc6a4fcf8c1ecce676c9076ca7a4afaf_r.jpg',
      time: '2021 剧情 爱情',
      haveSeen: false,
    },

    {
      name: '忠犬八公',
      image: 'https://cdn.04pic.com/image/640d59b6b65e2.jpg',
      time: '2009 剧情  家庭 ',
      haveSeen: true,
    },
    
  ],
}
export default filmData
