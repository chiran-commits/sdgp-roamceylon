const whiteList = require('./whiteList');
//the function is used to check if the origin is in the whiteList and if it is then it allows the credentials to be sent
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    console.log(origin);
    if (whiteList.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials