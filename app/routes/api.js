import Router from 'koa-router'
import models from '../models'

const router = new Router()
const User = models.User

router.prefix('/api')

router.get('/', async ctx =>{
	let user = await User.findAll()
	ctx.body = user
})

export default router