 const jwt = require('jsonwebtoken');
 function JWTtoken(payload){



   return jwt.sign(payload,'d44fa97e9764408315d3520f90592bbf',{expiresIn:'10m'});

}

function verifyJWTtoken(req, res, next) {
    var Token;
    var Header = req.headers["authorization"];    
    if (typeof Header !== 'undefined') {
        var bearer = Header.split(" ");
        Token = bearer[1];
        jwt.verify(Token,'d44fa97e9764408315d3520f90592bbf', function (err, decoded) {
            if (err || !decoded) {
                return res.status(401).send('Sorry your seesion has expired');
            } else {
                next();
            }
        })
    } else {
        res.status(403).send({ errorMessage: "Access forbidden. Access to this resource is blocked. Please login to access." });
    }
}

module.exports={JWTtoken,verifyJWTtoken};




