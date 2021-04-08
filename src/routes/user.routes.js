const { Router } = require('express')
const router = Router()
const { 
  getResourcesByQuery, 
  postResource, 
  deleteResource, 
  getResource 
} = require('../controllers/user.controllers')

router.route('/')
  .get(getResourcesByQuery)
  .post(postResource)
  

router.route('/:id')
  .get(getResource)
  .delete(deleteResource)


module.exports = router
