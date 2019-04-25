const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/biere', { target: 'http://localhost:9080/' }));
    app.use(proxy('/boutique/panier', { target: 'http://localhost:9080/' }));
    app.use(proxy('/boutique/panier/**', { target: 'http://localhost:9080/' }));
};