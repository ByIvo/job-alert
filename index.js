const JobFinder = require('./src/job-finder');
const JobAlert = require('./src/job-alert');

(async function() {
    const response = await JobFinder.findJobs();

    JobAlert.alertJobsFound(response.jobs);
})();