import type { HttpContext } from '@adonisjs/core/http'

import Emprestimo from "#models/emprestimo"
import { EmprestimoValidator } from '#validators/emprestimo'

export default class EmprestimosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Emprestimo.query().paginate(page, perPage)

    }

    async show({ params }: HttpContext) {

        return await Emprestimo.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = await request.validate({ schema: EmprestimoValidator })
        return await Emprestimo.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const produto = await Emprestimo.findOrFail(params.id)
        const dados = await request.validate({ schema: EmprestimoValidator })

        produto.merge(dados)
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {
        const produto = await Emprestimo.findOrFail(params.id)

        await produto.delete()
        return { msg: 'registro deletado com sucesso', Emprestimo }

    }

}