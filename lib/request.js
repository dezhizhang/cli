const axios = require('axios');

axios.interceptors.response.use(res => {
    return res.data;
})


async function fetchRepoList(url) {
    axios.get(url)
}

module.exports = {
    fetchRepoList
}