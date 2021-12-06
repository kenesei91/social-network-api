const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtsRoutes = require('./thoughts-routes');

// Add prefix of `/users` to created routes 
router.use('/users', userRoutes);

// Add prefix of `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

// Export Module Router
module.exports = router;