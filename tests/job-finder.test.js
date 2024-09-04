const axios = require('axios');
const sinon = require('sinon');

sinon.stub(axios, 'get').resolves({
  data: [{
    "id": 607,
    "name": "Senior Java Developer",
    "slug": "senior-java-developer-240719",
    "description": "## Most Important:\n- Strong proficiency in Java programming.\n- Experience with JSP and basic HTML.\n- Strong knowledge of MySQL database management.\n- Proficiency in JavaScript.\n- Excellent debugging and problem-solving skills.\n\n## Nice to Have:\n- Experience with JaCoCo test coverage tool.\n- Familiarity with modern development practices and agile methodologies.\n\n## Personal Attributes:\n- Strong self-organization and execution skills to meet project objectives independently.\n- Strong communication skills in English, both written and verbal.",
    "summary": null,
    "created_at": "2024-07-19T11:25:59.000Z",
    "updated_at": "2024-08-22T16:12:25.000Z",
    "priority": 8,
    "open": false,
    "baseTimezone": "Central Standard Time (North America) CST",
    "arrangement": null,
    "jobLocation": null,
    "image": {},
    "skills": [
        {
            "id": 4,
            "title": "Java",
            "slug": "java",
            "confirmed": true,
            "created_at": "2020-12-02T02:35:32.000Z",
            "updated_at": "2020-12-02T02:35:32.000Z"
        },
        {
            "id": 56,
            "title": "MySQL",
            "slug": "mysql",
            "confirmed": true,
            "created_at": "2020-12-02T02:35:32.000Z",
            "updated_at": "2020-12-02T02:35:32.000Z"
        },
        {
            "id": 1,
            "title": "JavaScript",
            "slug": "javascript",
            "confirmed": true,
            "created_at": "2020-12-02T02:35:32.000Z",
            "updated_at": "2020-12-02T02:35:32.000Z"
        }
    ],
    "isAlwaysHiring": false
},
{
  "id": 607,
  "name": "Senior Java Developer 2",
  "slug": "senior-java-developer-240719",
  "description": "Full description",
  "summary": null,
  "created_at": "2024-07-19T11:25:59.000Z",
  "updated_at": "2024-08-22T16:12:25.000Z",
  "priority": 8,
  "open": false,
  "baseTimezone": "Central Standard Time (North America) CST",
  "arrangement": null,
  "jobLocation": null,
  "image": {},
  "skills": [
  ],
  "isAlwaysHiring": false
}
]
});

const JobFinder = require('../src/job-finder');

test('Return found jobs', async () => {
  const result = await JobFinder.findJobs();

  expect(result).toEqual({
    jobs: [
      {
        company: 'X-Team',
        title: 'Senior Java Developer',
        description: '## Most Important:\n- Strong proficiency in Java programming.\n- Experience with JSP and basic HTML.\n- Strong knowledge of MySQL database management.\n- Proficiency in JavaScript.\n- Excellent debugging and problem-solving skills.\n\n## Nice to Have:\n- Experience with JaCoCo test coverage tool.\n- Familiarity with modern development practices and agile methodologies.\n\n## Personal Attributes:\n- Strong self-organization and execution skills to meet project objectives independently.\n- Strong communication skills in English, both written and verbal.'
      },{
        company: 'X-Team',
        title: 'Senior Java Developer 2',
        description: 'Full description'
      }
    ]
  })
});