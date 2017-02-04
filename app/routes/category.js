import KoaRouter from 'koa-router'
import models from '../models'

let router = KoaRouter();
let Category = models.Category;
let Commodity = models.Commodity;
router.prefix('/api/category')

router.get('/', async(ctx) => {
    const category = await Category.findAll({
        order: [
            ['order']
        ]
    })
    ctx.body = category
})

router.get('/:id', async(ctx) => {
    const category = await Category.find({
        where: {
            id: ctx.params.id
        }
    })
    ctx.body = category
})

router.get('/:id/commodity', async(ctx) => {
    const commodities = await Commodity.findAll({
        where: {
            category: ctx.params.id
        },
        order: [
            ['order']
        ]
    })
    ctx.body = commodities
})
export default router
