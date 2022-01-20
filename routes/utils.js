const csrf = require('csurf');
const db = require('../db/models');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const getUserEmail = async (userId) => {
  // const userId = parseInt(req.session.auth.userId);
  const user = await db.User.findByPk(parseInt(userId));
  return user.email;
}

module.exports = {
  csrfProtection,
  asyncHandler,
  getUserEmail
};
