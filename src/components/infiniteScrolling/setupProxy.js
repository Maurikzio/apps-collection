const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/search.json', {
            target: 'http://openlibrary.org',
            changeOrigin: true
        })
    )
}