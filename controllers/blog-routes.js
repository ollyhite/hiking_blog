const router = require('express').Router();
const { Blog,Comments } = require('../models');

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
    });

    const blogs = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    console.log("blogs",blogs);

    res.render('blog', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id,{
        include: [
          {
            model: Comments,
            attributes: [
              'id',
              'username',
              'comment',
              'create_date',
              'blog_id',
            ],
          },
        ],
      });
    const blog = dbBlogData.get({ plain: true });
    console.log("blog",blog);

    res.render('article', {
      blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
