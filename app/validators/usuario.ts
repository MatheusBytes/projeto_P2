import { rules, schema } from '@adonisjs/validator'

export const UsuarioValidator = schema.create({
    nome: schema.string({}, [rules.maxLength(30)]),
    email: schema.string({}, [
        rules.email(),
        rules.maxLength(255),
        rules.required()
    ])
})