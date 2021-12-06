// Require express router
const router = require('express').Router();

// import the functionality and hook it up with the routes
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
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

// set up to POST and DELETE at /api/users/:userId/friends/:friendId
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

module.exports = router;