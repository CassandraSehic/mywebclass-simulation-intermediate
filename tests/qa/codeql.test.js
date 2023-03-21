const axios = require('axios');
const expect = require('expect');

test('CodeQL analysis passes', async () => {
  const result = await axios.post('https://github.com/api/v3/repos/CassandraSehic/mywebclass-simulation-intermediate/code-scanning/codeql/analyze', {
    ref: 'master',
    analysis_options: {
      fail_on_queries: true,
      queries: ['javascript/remote_code_execution', 'javascript/command_injection']
    }
  }, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });

  expect(result.data.conclusion).toBe('success');
});
