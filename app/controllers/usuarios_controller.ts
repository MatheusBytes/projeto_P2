import type { HttpContext } from '@adonisjs/core/http'

import Usuario from "#models/usuario"

export default class UsuariosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Usuario.query().paginate(page, perPage)

    }

    async show({ params }: HttpContext) {

        return await Usuario.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'email',])


        return await Usuario.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const produto = await Usuario.findOrFail(params.id)
        const dados = request.only([])

        produto.merge(dados)
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {
        const produto = await Usuario.findOrFail(params.id)

        await produto.delete()
        return { msg: 'registro deletado com sucesso', Usuario }

    }

}