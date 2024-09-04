const JobFinder = require('./src/job-finder');


(async function() {
    const response = await JobFinder.findJobs();
    console.log(response);
})();