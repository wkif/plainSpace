interface BookshelfType {
  bookshelfList: Array<Array<{ name: string; image: string; url?: string }>>
}

const bookshelfData: BookshelfType = {
  bookshelfList: [
    [
      {
        name: '查特莱夫人的情人',
        image: 'https://file.book123.info/covers/9787544783965.jpg',
        url: 'https://www.book123.info/detail/9787544783965',
      },
      {
        name: '百年孤独',
        image: 'https://www.kunnu.com/images/2018/07/bainiangudu.jpg',
        url: 'https://www.book123.info/detail/9787544291170',
      },
    ],
    [],
  ],
}
export default bookshelfData
