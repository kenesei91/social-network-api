// Require express router
const router = require('express').Router();

// import the functionality and hook it up with the routes
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts

} = require('../../controllers/thoughts-controller');

// set up GET all thoughts at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// post thoughts at /api/thoughts/:userId
router
  .route('/:userId')
  .post(createThoughts);


// Export module router
module.exports = router;