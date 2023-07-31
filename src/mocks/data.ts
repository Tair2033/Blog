type social = {
  id: number
  icon: string
  link: string
}

export interface MainPost {
  topTitle: string
  title: string
  paragraph: string
  tags: Array<string> | string
  readTime: string
  preview: string
  author: string
  publishDate: string
  socialLinks: Array<social>
}

export interface Post {
  id: number
  title: string
  tags: Array<string> | string
  mainText: string
  readTime: string
  preview: string
  author: string
  publishDate: string
  socialLinks: Array<social>
  text: []
}

export const main: MainPost = {
  topTitle: 'Product Design',
  title: 'How to create cool Business card designs',
  paragraph:
    'A business card is the face of a company or a public person, so a properly created layout will help to make' +
    'a good first impression about you. I will tell you about the features of a quality product and understand in detail how to make a business card layout yourself through various popular programs.',
  tags: ['Design', 'Product', 'Tutorial'],
  readTime: '10 min read',
  preview: 'cards.jpg',
  author: 'Alex Robinson',
  publishDate: '17 Jan 2020',
  socialLinks: [
    {
      id: 0,
      icon: 'twitter.png',
      link: 'www.x.com'
    },
    {
      id: 1,
      icon: 'vk.png',
      link: 'www.facebook.com'
    }
  ]
}

export const posts: Array<Post> = [
  {
    id: 0,
    title: 'The Nature. The best places in the world',
    tags: ['Design', 'Product', 'Tutorial'],
    mainText:
      'fsdfsdfdsfsdfsdfsdfsdfsdfsrtgrtgtrtvrvsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdffgbfgbfgbsdfsdrvfgbfbfgbfgbfsdfsdfsdfsdfsdgtgtbrybrt',
    readTime: '10 min read',
    preview: 'nature.jpg',
    author: 'Alex Robinson',
    publishDate: '17 Jan 2020',
    socialLinks: [
      {
        id: 0,
        icon: 'twitter.png',
        link: 'www.x.com'
      },
      {
        id: 1,
        icon: 'vk.png',
        link: 'www.facebook.com'
      }
    ],
    text: []
  },
  {
    id: 1,
    title: 'So yammy potatoes!',
    tags: ['Food', 'Product', 'Tutorial'],
    mainText:
      'fsdfsdfdsfsdfsdfsdfsdfsdfsrtgrtgtrtvrvsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdffgbfgbfgbsdfsdrvfgbfbfgbfgbfsdfsdfsdfsdfsdgtgtbrybrt',
    readTime: '14 min read',
    preview: 'food.jpg',
    author: 'Alex Robinson',
    publishDate: '17 Jan 2022',
    socialLinks: [
      {
        id: 0,
        icon: 'twitter.png',
        link: 'www.x.com'
      },
      {
        id: 1,
        icon: 'vk.png',
        link: 'www.facebook.com'
      }
    ],
    text: []
  },
  {
    id: 2,
    title: 'The best wedding - 5 steps',
    tags: ['Design', 'Wedding', 'Tutorial'],
    mainText:
      'fsdfsdfdsfsdfsdfsdfsdfsdfsrtgrtgtrtvrvsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdffgbfgbfgbsdfsdrvfgbfbfgbfgbfsdfsdfsdfsdfsdgtgtbrybrt',
    readTime: '6 min read',
    preview: 'wedding.jpg',
    author: 'Alex Robinson',
    publishDate: '14 Jul 2023',
    socialLinks: [
      {
        id: 0,
        icon: 'twitter.png',
        link: 'www.x.com'
      },
      {
        id: 1,
        icon: 'vk.png',
        link: 'www.facebook.com'
      }
    ],
    text: []
  }
]
