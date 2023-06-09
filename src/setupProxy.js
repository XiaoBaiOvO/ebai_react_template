const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://localhost:9000",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/api/ws", {
            target: "http://localhost:9000",
            ws: true,
            changeOrigin: true,
        })
    );
};
