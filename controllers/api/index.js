const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogsRoutes = require('./blogs-routes');
const commentsRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/blogs', blogsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
