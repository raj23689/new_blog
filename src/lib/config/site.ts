import type { SiteConfig } from '$lib/types/site'

const bio = [
  "Hi, I’m <strong>Raj Majumdar</strong> A.K.A CodeKaze. As an ambitious Full-Stack Web Developer", 
  "I have developed a profound understanding of HTML and CSS and JavaScript,enabling me to create innovative web solutions.", 
  "On the back-end, I have honed my skills in Python and mastered the Django framework, ensuring seamless data communication between the front-end and server."
]

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'CodeKaze',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/any@512.png',
    name: 'Raj Majumdar',
    status: '🌸',
    bio: bio[~~(Math.random() * bio.length)],
    metadata: [
      {
        text: "Github",
        icon: 'i-simple-icons-github',
        link: 'github.com/raj23689'
      },
      {
        text: '@raj_kaze',
        icon: 'i-simple-icons-mastodon',
        link: '#',
        rel: 'noopener noreferrer me'
      },
      {
        text: '@raj_kaze',
        icon: 'i-simple-icons-linkedin',
        link: '#',
        rel: 'noopener noreferrer me'
      },
    ]
  },
  themeColor: '#3D4451'
}
