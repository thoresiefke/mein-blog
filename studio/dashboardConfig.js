export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb787715dc03abfb71ff982',
                  title: 'Sanity Studio',
                  name: 'mein-blog-studio',
                  apiId: 'd1f84766-5579-44c9-a449-83c2c05e3e14'
                },
                {
                  buildHookId: '5fb787715890f2b83e3439ec',
                  title: 'Blog Website',
                  name: 'mein-blog',
                  apiId: 'b277625e-5613-4c9f-b075-2eebb968dac6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thoresiefke/mein-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mein-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
