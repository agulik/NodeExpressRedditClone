app.get('/createPost', onlyLoggedIn, function(request, response) {
    myReddit.getAllSubreddits()
        .then(results => {
            response.render('create-post-form', {
                subredditOptions: results
            });
        });
});