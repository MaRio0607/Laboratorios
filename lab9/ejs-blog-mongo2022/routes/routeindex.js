const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/task');


router.get('/', async function(req,res){
  let post= await Post.find()
  res.render('index',{post});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.get('/edit/:id', async (req,res) =>{
  let id=req.params.id
  let post = await Post.findById(id)
  res.render('edit',{post});
});


// Ruta que nos permita agregar nuevas tareas que vienen desde un metodo post. Una vez enviada la tarea podemos redireccionar a la pagina principal con res.redirect('/')
router.post('/newPost', async (req,res) =>{

  let task = new Post(req.body)
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

// # PENDIENTE
router.post('/edit/:id', async (req,res) =>{

  res.redirect("/")
});

// # PENDIENTE
router.post('/delete/:id', async (req,res) =>{

  res.redirect("/")
});


router.get('/delete/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)

  res.render('delete',{post});
});


module.exports = router;