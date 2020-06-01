export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ed47e53766834519bc1dd3d',
                  title: 'Sanity Studio',
                  name: 'davaogeeksblog-studio',
                  apiId: '858a84c2-960f-4d02-9c51-87e24bb9092f'
                },
                {
                  buildHookId: '5ed47e537ee67e291abfdc87',
                  title: 'Blog Website',
                  name: 'davaogeeksblog',
                  apiId: '5ea0fbc0-0bc0-4a40-9a96-68b106a481b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webpinoy/davaogeeksblog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://davaogeeksblog.netlify.app', category: 'apps'}
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
