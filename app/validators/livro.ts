import { rules, schema } from '@adonisjs/validator'



export const LivroValidator = schema.create({
    titulo: schema.string({}, [rules.maxLength(30)]),
    sinopse: schema.string({}, [rules.maxLength(30)])
})