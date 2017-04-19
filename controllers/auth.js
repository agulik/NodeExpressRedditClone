var express = require('express');

module.exports = function(myReddit) {
    var authController = express.Router();
    
    authController.get('/login', function(request, response) {
        response.render('login-form', {});
    });
    
    authController.post('/login', function(request, response) {
        myReddit.checkUserLogin(request.body) // passing request body to checkUserLogin function
        .then(result => {
           
        }).catch(result => {
            return response.redirect('unauthorized', {}) // if login is unsuccessful, redirect to unauth page
        })
        
        
        // myReddit.createUser(request.body).then(response.redirect('auth/login'))
    });
    
    authController.get('/signup', function(request, response) {
        response.render('signup-form', {});
    });
    
    authController.post('/signup', function(request, response) {
        myReddit.createUser(request.body).then(response.redirect('auth/login'))
    });
    
    return authController;
}