module.exports = (function() {
    const axios = require('axios');

    const findJobs = async function() {
        const response = await axios.get('anyurl');

        const mappedJobs = response.data.map(function(job) {
            return {
                company: 'X-Team',
                title: job.name,
                description: job.description
            };
        });

        return {
            jobs: mappedJobs
        }
    };

    return {
        findJobs: findJobs
    }
})();