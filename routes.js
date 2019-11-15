
const routes = module.exports = require('next-routes')()

routes
   // .add('blog', '/blog/:slug')
     .add('home', '/', 'index')
     .add('contactUs', '/contact-us', 'contact')
   // .add('/:noname/:lang(en|es)/:wow+', 'complex')
   // .add({name: 'beta', pattern: '/v3', page: 'v3'})
