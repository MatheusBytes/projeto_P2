import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import  type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Autor from './autor.js'
import Categoria from './categoria.js'
import Emprestimo from './emprestimo.js'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare sinopse: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Autor)
  declare autor: BelongsTo <typeof Autor>

  @belongsTo(() => Categoria)
  declare categoria : BelongsTo <typeof Categoria>

  @hasMany(() => Emprestimo)
  declare emprestimo : HasMany <typeof Emprestimo>
}