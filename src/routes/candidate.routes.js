const { Router } = require('express')
const router = Router()

const { 
  getResourcesByQuery, 
  postResource, 
  deleteResource, 
  getResource, 
  updateResource
  } = require('../controllers/candidate.controllers')


router.route('/')
  .get(getResourcesByQuery)
  .post(postResource)

router.route('/:id')
  .get(getResource)
  .delete(deleteResource)
  .put(updateResource)


  
module.exports = router
