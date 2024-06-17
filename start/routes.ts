/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AutorsController from '#controllers/autors_controller'
import CategoriasController from '#controllers/categorias_controller'
import EmprestimosController from '#controllers/emprestimos_controller'
import LivrosController from '#controllers/livros_controller'
import UsuariosController from '#controllers/usuarios_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.resource('/autor', AutorsController).apiOnly()
router.resource('/categoria' , CategoriasController).apiOnly
router.resource('/emprestimo' , EmprestimosController).apiOnly
router.resource('/livro' , LivrosController).apiOnly
router.resource('/usuario' , UsuariosController).apiOnly