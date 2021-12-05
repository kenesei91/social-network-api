const router = require('express').Router();

const userRoutes = require('./user-routes');

// Add prefix of `/users` to created routes 
router.use('/users', userRoutes);

// Export Module Router
module.exports = router;