const { Router } = require('express')
const router = Router()

const { getResource,
   getResources,
   postResource, 
   deleteResource 
  } = require('../controllers/candidate.controllers')


router
  .route('/')
  .get(getResources)
  .post(postResource)

router
  .route('/:id')
  .get(getResource)
  .delete(deleteResource)


  
module.exports = router
