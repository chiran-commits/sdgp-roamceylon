const userModel= require('../database/userModel');

const refresh=async(req,res)=>{


    // const cookies = req.cookies;
    // if (!cookies?.jwt) return res.sendStatus(401);
    // const refreshToken = cookies.jwt;

    if (!req.cookies.token) return res.sendStatus(401);
    const refreshToken = req.cookies.token;


    

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {

                if (err) return res.sendStatus(403);

                const accessToken = jwt.sign(
                    { "username": decoded.username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30s' }
                );
                res.json({ accessToken })
            }
        );

}

module.exports=refresh;