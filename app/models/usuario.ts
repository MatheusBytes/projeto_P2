import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Emprestimo from './emprestimo.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare nome: string

  @column()
  declare email: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Emprestimo)
  declare emprestimo: HasMany<typeof Emprestimo>
}