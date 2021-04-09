const { Router } = require('express')
const router = Router()
const { 
  getResourcesByQuery, 
  postResource, 
  deleteResource, 
  getResource, 
  updateResource
} = require('../controllers/user.controllers')

router.route('/')
  .get(getResourcesByQuery)
  .post(postResource)
  

router.route('/:id')
  .get(getResource)
  .delete(deleteResource)
  .put(updateResource)


module.exports = router
