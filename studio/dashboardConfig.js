export default {
  widgets: [
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
                  buildHookId: '60e30190f36dd5646afc7525',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8occqnjp',
                  apiId: '1bf45002-0b1c-4030-9748-75bac40bd3a3'
                },
                {
                  buildHookId: '60e301900456b5087fcdffb9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9cdunoej',
                  apiId: '8ed53609-c4f3-49a2-addf-8a5bd90d3b20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joernroeder/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9cdunoej.netlify.app', category: 'apps'}
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
