import express   from "express";

const router = express.Router();


let posts = [
    {id: 1, title: 'Post One '},
    {id: 2, title: 'Post Two '},
    {id: 3, title: 'Post Three '}

]

router.get('/',(req,res) => {
    const limit = parseInt(req.query.limit);



  
    if(!isNaN(limit) && limit > 0){
       res.status(200).json(posts.slice(0,limit))
    }else {
        res.status(200).json(posts)
    }
    console.log(req.query)
})


router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
       return res.status(404).json({message: 'A post with the given id is not found'});
    }
        res.status(200).json(post)
    }) 

  router.post('/', (req,res) => {
    // console.log(req.body), 'This is request body'
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if(!newPost.title){
        return res.status(400).json({message: 'Please include title'})
    }

    posts.push(newPost)


    res.status(201).json(posts)
  });

  router.put('/:id' , (req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({message: 'post not found'})
    }

    post.title = req.body.title;
    res.status(200).json(posts)
  })


  router.delete('/:id' , (req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({message: 'post not found'})
    }

    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
  })


  


export default router     
    