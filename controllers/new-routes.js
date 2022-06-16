const router = require('express').Router();
const { Blog } = require('../models');

// GET create page
router.get('/', async (req, res) => {
    try {
        res.render('new', {
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
