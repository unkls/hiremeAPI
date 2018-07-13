const indexRoute = require ('./routes/indexRoute');
const candidateRoute = require ('./routes/candidateRoute');
const recruiterRoute = require ('./routes/recruiterRoute');
const userRoute = require('./routes/userRoute');
const jobRoute = require('./routes/jobRoute');
const jobSkillRoute = require('./routes/jobSkillRoute');
const skillRoute = require('./routes/skillRoute');

const apiVersion = '/v1'

module.exports = (req, res, next) => {
    req.app.use(apiVersion + '/', indexRoute);
    req.app.use(apiVersion + '/candidates', candidateRoute);
    req.app.use(apiVersion + '/recruiters', recruiterRoute);
    req.app.use(apiVersion + '/users', userRoute);
    req.app.use(apiVersion + '/jobs', jobRoute);
    req.app.use(apiVersion + '/job-skills', jobSkillRoute);
    req.app.use(apiVersion + '/skills', skillRoute);
    next();
};