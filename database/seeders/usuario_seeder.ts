import Usuario from '#models/usuario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Usuario.createMany([
      {
        nome: 'matheus rodrigues monte',
        email: 'matheuzin2004@hotmail.com'
      },

      {
        nome: 'lusanira sousa',
        email: 'lusanira@gmail.com'
      },

      {
        nome: 'joao gabriel',
        email: 'joazao@gmail.com'
      }
    ])
  }
}