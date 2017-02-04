import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import json from 'koa-json'
import convert from 'koa-convert'
import path from 'path'
import serve from 'koa-static'
import historyApiFallback from 'koa-history-api-fallback'
import routing from './routes'

const app = new Koa()

app.use(convert.compose(
  logger(),
  bodyParser(),
  json()
))

routing(app)

app.use(convert.compose(
  historyApiFallback(),
  serve(path.resolve('dist'))
))



app.listen(8888, () => console.log('server started 8888'))

export default app