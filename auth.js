
const db = require("./db/models");



const loginUser = (req,res,next) =>{
    res.sessoin.auth = {userId: user.id};
};

//needs database User
const restoreUser = async(req,res,next) =>{
    if(req.session.auth) {
        const { userId } = req.session.auth;
        try{
            const user = await db.User.findByPk(userId);
            if(user){
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        }
        catch(err){
            res.local.authenticated = false;
            next(err);
        }
    }
    else{
        res.locals.authenticated = false;
        next();
    }
}
//authorization middleware
const requireAuth = (req,res,next) =>{
    if(!res.locals.authenticated){
        return res.redirect(/* place holder router when not logged in */)
    }
    return next();
}


const logoutUser = (req,res) =>{
    delete req.session.auth;
};

module.exports = {
    loginUser,
    restoreUser,
    requireAuth,
    logoutUser
}
