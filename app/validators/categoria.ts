import { rules, schema } from '@adonisjs/validator'

export const CategoriaValidator = schema.create({
    nome: schema.string({}, [rules.maxLength(20)])
})