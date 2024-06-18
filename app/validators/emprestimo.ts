import { rules, schema } from '@adonisjs/validator'


export const EmprestimoValidator = schema.create({
    status: schema.string({}, [rules.maxLength(20)])
})