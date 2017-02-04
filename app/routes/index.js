import api from './api'
import category from './category'
import commodity from './commodity'

const routes = [
    api,
    category,
    commodity
]

export default function(app) {
    routes.forEach((route) => {
        app
            .use(route.routes())
            .use(route.allowedMethods({
                throw: true
            }))
    })
}
