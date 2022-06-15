const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const blogRoutes = require('./blog-routes.js');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/api', apiRoutes);

module.exports = router;
