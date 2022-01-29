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



// # PENDIENTE
router.post('/edit/:id', async (req,res) =>{
  await Post.updateOne({_id:req.params.id},req.body)
  res.redirect("/")
});

// # PENDIENTE
router.post('/delete/:id', async (req,res) =>{
  let id = req.params.id
  await Post.remove({_id:id})
  res.redirect("/")
});


router.get('/delete/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)

  res.render('delete',{post});
});


module.exports = router;