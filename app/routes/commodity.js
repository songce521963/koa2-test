import KoaRouter from 'koa-router'
import models from '../models'

let router = KoaRouter()
let Commodity = models.Commodity
let Category = models.Category
Commodity.belongsTo(Category, { foreignKey: 'category' })

router.prefix('/api/commodity')

router
    .param('id', (id, ctx, next) => {
        ctx.id = id
        if (!ctx.id) return ctx.status = 404
        return next()
    })
    .get('/', async(ctx) => {
        const commodities = await Commodity.findAll({
            include: [{
                model: Category
            }]
        })
        ctx.body = commodities
    })
    .get('/:id', async(ctx) => {
        const commodity = await Commodity.find({
            where: {
                id: ctx.id
            }
        })
        ctx.body = commodity
    })
    .post('/', async(ctx) => {
        ctx.body = await Commodity.create(ctx.request.body)
    })
    .put('/:id', async(ctx) => {
        await Commodity.update(ctx.request.body, {
            where: {
                id: ctx.id
            }
        })
        ctx.body = await Commodity.find({
            where: {
                id: ctx.id
            }
        })
    })
    .del('/:id', async(ctx) => {
        await Commodity.destroy({
            where: {
                id: ctx.id
            }
        })
        ctx.body = ctx.id
    })


export default router
