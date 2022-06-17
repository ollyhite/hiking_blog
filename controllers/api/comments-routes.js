const router = require('express').Router();
const { Comments } = require('../../models');

// CREATE new comments
router.post('/', async (req, res) => {
    try {
        const dbCommentsData = await Comments.create({
        username: req.body.username,
        comment: req.body.comment,
        blog_id: req.body.blog_id,
        create_date:req.body.create_date
        });

        req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(dbCommentsData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
