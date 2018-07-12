const indexRoute = require ('./routes/indexRoute');
const candidateRoute = require ('./routes/candidateRoute');
const recruiterRoute = require ('./routes/recruiterRoute');
const userRoute = require('./routes/userRoute');
const apiVersion = '/v1'

module.exports = (req, res, next) => {
    req.app.use(apiVersion + '/', indexRoute);
    req.app.use(apiVersion + '/candidates', candidateRoute);
    req.app.use(apiVersion + '/recruiters', recruiterRoute);
    req.app.use(apiVersion + '/users', userRoute);
    next();
};