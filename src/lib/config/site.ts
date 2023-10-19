import type { SiteConfig } from '$lib/types/site'


export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'CodeKaze',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/rak_photo_2023-10-19_15-33-12.jpg',
    name: 'Raj Majumdar',
    status: '🌸',
    bio: 'A Passionate Full-Stack Dev',
    metadata: [
      {
        text: "Github",
        icon: 'i-simple-icons-github',
        link: 'github.com/raj23689'
      },
      {
        text: '@raj_kaze',
        icon: 'i-simple-icons-mastodon',
        link: 'https://mastodon.social/@raj_kaze',
        rel: 'noopener noreferrer me'
      }
    ]
  },
  themeColor: '#3D4451'
}
