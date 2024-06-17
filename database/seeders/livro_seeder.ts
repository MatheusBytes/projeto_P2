import Livro from '#models/livro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Livro.createMany([
      {
        titulo: 'Harry Potter e a Pedra Filosofal',
        sinopse: 'Primeiro livro da série Harry Potter.',

      },
      {
        titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
        sinopse: 'Primeiro livro da série O Senhor dos Anéis.',
      },

    ])
  }
}