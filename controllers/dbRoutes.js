const router = require('express').Router();
const { Post } = require('../models');
const { withAuth } = require('../utils/auth.js');

router.get('/', withAuth, async (req, res) => {
  try {
    console.log('Accessing dashboard route');

     // Check if session data is available
     if (!req.session.user_id) {
      console.log('No user_id in session');
      return res.status(400).json({ error: 'No user_id in session' });
    }

    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    console.log('Post data retrieved:', postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log('Post data formatted:', posts);

    res.render('dashboard', {
      dashboard: true,
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('newPost', {
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    console.log('Accessing edit route with id:', req.params.id);
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      console.log('Post data retrieved for edit:', post);

      res.render('editPost', {
        dashboard: true,
        post,
        loggedIn: req.session.logged_in,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error('Error occurred:', err.message);
    res.status(500).json(err);
    
  }
});

module.exports = router;
