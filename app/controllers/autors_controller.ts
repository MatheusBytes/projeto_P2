import type { HttpContext } from '@adonisjs/core/http'

import Autor from "#models/autor"
import { AutorValidator } from '#validators/autor'

export default class AutorsController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 3)
        const perPage = request.input('perPage', 10)
        return Autor.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {

        return await Autor.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = await request.validate({ schema: AutorValidator })
        return await Autor.create(dados)

    }

    async update({ params, request }: HttpContext) {
        const produto = await Autor.findOrFail(params.id)
        const dados = await request.validate({ schema: AutorValidator })

        produto.merge(dados)
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {
        const produto = await Autor.findOrFail(params.id)

        await produto.delete()
        return { msg: 'registro deletado com sucesso', Autor }

    }
}