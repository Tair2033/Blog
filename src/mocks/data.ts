interface Post {
  topTitle: string
  title: string
  paragraph: string
  tags: Array<string> | string
}

export const main: Post = {
  topTitle: 'Product Design',
  title: 'How to create cool Business card designs',
  paragraph:
    'A business card is the face of a company or a public person, so a properly created layout will help to make' +
    'a good first impression about you. I will tell you about the features of a quality product and understand in detail how to make a business card layout yourself through various popular programs.',
  tags: ['Design', 'Product', 'Tutorial']
}

export const posts: object = {}
