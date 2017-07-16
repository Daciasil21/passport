

var exports = module.exports = {}
 //controller for sign up
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
//controller for sign in
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
//controller for dashboard
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}
//controller for logout
exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}
