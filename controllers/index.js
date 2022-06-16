const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const blogRoutes = require('./blog-routes.js');
const newBlogRoutes = require('./new-routes.js');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/create_new', newBlogRoutes);
router.use('/api', apiRoutes);

module.exports = router;
