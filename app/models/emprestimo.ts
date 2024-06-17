import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo, } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Livro from './livro.js'



export default class Emprestimo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status: string
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Livro)
  declare livro: BelongsTo<typeof Livro>
}