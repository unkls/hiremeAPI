const indexRoute = require ('./routes/indexRoute.js');

module.exports = (req, res, next) => {
    req.app.use('/', indexRoute);
    next();
};