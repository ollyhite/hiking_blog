const router = require('express').Router();
const { Blog } = require('../../models');

// CREATE new blog
router.post('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.create({
        title: req.body.title,
        short_describe: req.body.short_describe,
        article: req.body.article,
        filename: req.body.filename,
        create_date:req.body.create_date
        });

        req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(dbBlogData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
