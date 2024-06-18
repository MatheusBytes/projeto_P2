import { rules, schema } from '@adonisjs/validator'

export const AutorValidator = schema.create({
    nome: schema.string({}, [rules.minLength(10)]),
    biografia: schema.string({}, [rules.minLength(10)])
})