module.exports = (function() {
    const axios = require('axios');

    const findJobs = async function() {
        const response = await axios.get('anyurl');

        const mappedJobs = response.data
        .filter(javaJobs)
        .map(expectedJobStructure);
        
        return {
            jobs: mappedJobs
        }
    };

    function javaJobs(job) {
        const matches = job.name.matchAll(/\bjava\b/gi);
        const hasFoundAnything = !matches.next().done;
        return hasFoundAnything;
    }

    function expectedJobStructure(job) {
        return {
            company: 'X-Team',
            title: job.name,
            description: job.description
        };
    }

    return {
        findJobs: findJobs
    }
})();