import Emprestimo from '#models/emprestimo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Emprestimo.createMany([

      { status: 'pendente' },
      { status: 'devolvido' },
      { status: 'atrasado' },

    ])
  }
}