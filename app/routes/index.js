import api from './api'

const routes = [api]

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
}