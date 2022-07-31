const PROXY_CONFIG = {};

PROXY_CONFIG['/app1'] = {
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/app2'] = {
    target: 'http://localhost:3002',
    secure: false,
    changeOrigin: true
};

module.exports = PROXY_CONFIG;
