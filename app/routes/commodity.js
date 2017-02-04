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
        let dataString = ctx.request.body.images
        if (dataString.length > 0) {
            let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

            let type = matches[1].replace(/^image\//, '');
            let dataBuffer = new Buffer(matches[2], 'base64'); //base64解码  
            let newPath = path.join('public/upload', parseInt(Math.random() * 100) + Date.parse(new Date()).toString() + '.' + type);
            fs.writeFile(newPath, dataBuffer, err => {
                if (err) throw err
            });

            ctx.request.body.picture = newPath.replace(/^public/, '')
        }

        const commodity = await Commodity.create(ctx.request.body)
        ctx.body = commodity
    })
    .put('/:id', async(ctx) => {
        let dataString = ctx.request.body.images
        if (dataString.length > 0) {
            let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

            let type = matches[1].replace(/^image\//, '');
            let dataBuffer = new Buffer(matches[2], 'base64'); //base64解码  
            let newPath = path.join('public/upload', parseInt(Math.random() * 100) + Date.parse(new Date()).toString() + '.' + type);
            fs.writeFile(newPath, dataBuffer, err => {
                if (err) throw err
            });

            ctx.request.body.picture = newPath.replace(/^public/, '')
        }

        const commodity = await Commodity.update(ctx.request.body, {
            where: {
                id: ctx.id
            }
        })
        ctx.body = commodity
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
