// Require express router
const router = require('express').Router();

// import the functionality and hook it up with the routes
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// set up GET all and post at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;