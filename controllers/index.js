const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dbRoutes = require('./dbRoutes');


router.use('/api', (req, res, next) => {
  console.log('API route accessed'); 
  next();
}, apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dbRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
