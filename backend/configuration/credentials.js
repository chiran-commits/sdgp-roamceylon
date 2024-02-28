const whiteList = require('./whiteList');

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    console.log(origin);
    if (whiteList.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials