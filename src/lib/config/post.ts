import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    comment: {
        use: ['Giscus'],
        style: 'boxed', // comment system bar styles: none / bordered / lifted / boxed
        giscus: {
          repo: 'raj23689/new_blog',
          repoID: 'R_kgDOKiYTAQ',
          category: 'Announcements',
          categoryID: 'DIC_kwDOKiYTAc4CaRFk',
          reactionsEnabled: true, // reactions: true / false
          inputPosition: 'top', // position of comment box: top / bottom
          lang: 'en', // language
          loading: 'lazy',
          theme: 'noborder_dark' // theme
        }
      }
}
