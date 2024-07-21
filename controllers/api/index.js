const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', (req, res, next) => {
    console.log('/api/users route accessed'); // Add this line
    next();
  }, userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
