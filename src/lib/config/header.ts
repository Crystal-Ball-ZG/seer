interface headerConfig {
  nav?: { [href: string]: string }
  html?: string
}

export const config: headerConfig = {
  nav: {
    '/eras': 'Eras',
    '/events': 'Events',
    '/progress-report': 'Progress report',
    '/resources': 'Resources',
    '/titles': 'Titles',
  }
}
