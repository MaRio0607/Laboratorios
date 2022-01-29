const { render } = require('ejs');
const express = require('express');
const router = express.Router();
//const Task = require('../model/task');


router.get('/', async function(req,res){
  res.render('index');
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

// Ruta que nos permita agregar nuevas tareas que vienen desde un metodo post. Una vez enviada la tarea podemos redireccionar a la pagina principal con res.redirect('/')
router.post('/newPost', async (req,res) =>{

  let task = new Task(req.body)
  await  task.save()
  res.redirect('/')
 });

// Ruta para editar los datos. Primero necesitamos buscarlos en base a un id que ya me llega desde la ruta. Metodo de busqueda findById(). 
// Los editaremos en una pagina aparte llamada 'edit'
router.get('/edit/:id',   async(req,res) =>{

  let id = req.params.id
  let task  = await Task.findById(id)
  res.render('edit',{task})

})

// Ruta para efectuar la actualizacion de los datos utilizando el metodo update()
router.post('/edit/:id',   async(req,res) =>{

  await Task.updateOne({_id:req.params.id},req.body)

  res.redirect('/')
})

// Esta ruta permita modificar el estatus de una tarea por medio de su propiedad status. 
// Necesitamos buscar el task en la BD por medio de findById, una vez encontrado el registro hay que modificar el status y guardar con save(). 
router.get('/turn/:id', async (req, res, next) => {

  let id = req.params.id
  let task = await Task.findById(id)
  task.status = !task.status
  await task.save()
  res.redirect('/')
  
    });
  

// Ruta que nos permita eliminar tareas con el método "deleteOne"
router.get('/delete/:id',  async (req,res) =>{

  let id = req.params.id
  await Task.remove({_id:id})
  res.redirect('/')
})

module.exports = router;