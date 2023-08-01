type social = {
  id: number
  icon: string
  link: string
}

interface MainPost {
  topTitle: string
  title: string
  paragraph: string
  tags: Array<string> | string
  readTime: string
  preview?: string
  author: string
  publishDate: string
  socialLinks: Array<social>
}

interface Post {
  id: number
  title: string
  tags: Array<string> | string
  mainText: string
  readTime: string
  preview?: string
  author: string
  publishDate: string
  likes: number
  socialLinks: Array<social>
  text: []
}

interface News {
  id: number
  title: string
  text: string
  publishDate: string
  preview?: string
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
    tags: ['Nature'],
    mainText:
      'Forget crowded cities, tourist attractions, escape the crowds and seek out the most beautiful nature in the world. Although there is only a handful of official natural wonders across the globe, our planet is full of stunning scenery, breathtaking landscapes, and intriguing sights.',
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
    likes: 123,
    text: []
  },
  {
    id: 1,
    title: 'So yammy potatoes!',
    tags: ['Food', 'Product', 'Tutorial'],
    mainText:
      'Potatoes are thought to have been independently domesticated several times and were largely cultivated in South America by the Incas as early as 1,800 years ago. Encountered by the invading Spaniards, potatoes were introduced into Europe during the second half of the 16th century. By the end of the 17th century the plant was a major crop in Ireland, and by the end of the 18th century it was a major crop in continental Europe, particularly Germany, and in the west of England.',
    readTime: '14 min read',
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
    likes: 34,
    text: []
  },
  {
    id: 2,
    title: 'The best wedding - 5 steps',
    tags: ['Design', 'Wedding', 'Tutorial'],
    mainText:
      'Wearing things to events that seem to be made for a different occasion has not been a bad thing for a long time. Traditionally, caps, scarves, stoles and headbands do not belong to wedding paraphernalia. But how organically and stylishly they look in combination with a white brides dress! If you are also bored with classic images with a veil, pay attention to our selection of fashionable shawls and bandanas for brides.',
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
    likes: 42,
    text: []
  }
]

export const news: Array<News> = [
  {
    id: 0,
    title: 'We are released!',
    text: 'Drgrlgo moprmprmb oktrbop rtbkmkml mcsdop moisdop ooo.',
    publishDate: '22.04.2023'
  },
  {
    id: 1,
    title: 'New possibilities',
    text: 'Try it yourself.',
    publishDate: '30.05.2023'
  }
]
