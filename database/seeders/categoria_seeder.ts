
import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'



export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Categoria.createMany([
      {
        nome: 'Fantasia',
      },
      {
        nome: 'Ficção Científica',
      },
      {
        nome: 'Romance',
      },
      {
        nome: 'Terror',
      },
      {
        nome: 'Biografia',
      },
    ])
  }
}