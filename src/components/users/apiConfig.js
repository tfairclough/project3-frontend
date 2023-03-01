let apiUrl;
const expressPort = 5001;
const apiUrls = {
    development: `http://localhost:${expressPort}/api`,
    production: `https://napstersocialfinal.fly.dev/api`
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

export default apiUrl;  