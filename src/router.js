const indexRoute = require ('./routes/indexRoute');
const candidateRoute = require ('./routes/candidateRoute');
const userRoute = require('./routes/userRoute');

module.exports = (req, res, next) => {
    req.app.use('/', indexRoute);
    req.app.use('/candidates', candidateRoute);
    req.app.use('/users', userRoute);
    next();
};