interface Sites {
  title: string
  subtitle?: string
  lang?: string
  descr?: string
  author: {
    name: string
  } & {
    [key: string]: string
  }
  url: string
  themeColor?: string
  themeBackgroundImage?: string 
  since?: string
}

export const site: Sites = {
  title: 'Zeitgeist Seer',
  subtitle: 'The Zeitgeist Seer Program',
  lang: 'en-US',
  descr: 'Website for Zeitgeist Seer program. Seer program is community that generates content and prediction markets on Zeitgeist parachain.',
  author: {
    name: 'Zeitgeist Seer',
    avatar: '/assets/maskable@512.png',
    status: '🌸',
    bio: 'Zeitgeist is a blockchain powered by prediction markets, and prediction markets are powered by the community that creates them.  Emphasizing this philosophy of a community-powered blockchain, Zeitgeist will be governed via "Futarchy", a governance model introduced by world renowned economist Robin Hanson.'
  },
  url: import.meta.env.URARA_SITE_URL ?? 'https://zeitgeist-seer.com',
  themeColor: '#000000',
  themeBackgroundImage: '/assets/bg-image.webp'
}
