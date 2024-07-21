const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };

const withoutAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    next();
  } else {
    res.redirect('/');
  }
};

const apiAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(403).json({ msg: 'you must login to perform this action' });
  } else {
    next();
  }
};

module.exports = {withAuth, apiAuth, withoutAuth};