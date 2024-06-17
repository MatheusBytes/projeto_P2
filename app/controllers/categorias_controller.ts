import Categoria from '#models/categoria'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriasController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 20)

        return await Categoria.query().paginate(page, perPage)

    }

    async show({ params }: HttpContext) {

        return await Categoria.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome',])


        return await Categoria.create(dados)


    }
    async update({ params, request }: HttpContext) {
        const produto = await Categoria.findOrFail(params.id)
        const dados = request.only([])

        produto.merge(dados)
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {
        const produto = await Categoria.findOrFail(params.id)

        await produto.delete()
        return { msg: 'registro deletado com sucesso', Categoria }

    }


}