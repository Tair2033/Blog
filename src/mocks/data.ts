type social = {
  id: number
  icon: string
  link: string
}

interface Post {
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

export const main: Post = {
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

export const posts: object = {}
