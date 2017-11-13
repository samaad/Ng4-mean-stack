const User = require('../modals/user');

module.exports = (router) => {

    router.post('/register', (req, res) =>{
        if(!req.body.email){
            res.json({  success: false, message: 'you must provide an e-mail' });
        }else{
            if(!req.body.username){
                res.json({ success: false,message: 'you must provide an username'});
            }else{
                if(!req.body.password){
                    res.json({ success: false,message: 'you must provide an password'});
                }else{
                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password
                    });
                    user.save((err) =>{
                        if(err){
                            if(err.code == 1100)
                                res.json({ success: false, message: 'Username or email already exists: '});    
                            else{
                                if(err.errors){
                                    if(err.errors.email){
                                        res.json({ success: false, message: err.errors.email.message});
                                    } 
                                    if(err.errors.username){
                                        res.json({ success: false, message: err.errors.username.message}); 
                                    }
                                    if(err.errors.password){
                                        res.json({ success: false, message: err.errors.password.message});
                                    }
                                }
                                else{
                                    res.json({ success: false, message: 'could not save user. Error: ', err});
                                }
                            }
                                
                        }else{
                            res.json({
                                success: true,
                                message: 'Account Register!'
                            });
                        }
                    });
                }
            }
        }
        // req.body.username;
        // req.body.password;
    });
    return router;
}