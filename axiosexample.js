const axios = require('axios');

const url = 'https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/MY_UID';  // Replace with your API endpoint

const dataPayload = {
        key: "MY_UID",
        value: "testing",
        description: "storing sensitive data from a synthetic"
      };

const customHeaders = {
    'API-key': 'REDACTED',
    'Content-Type': 'application/json',
};

axios.put(url, dataPayload, { headers: customHeaders })
    .then((response) => {
        console.log('Status code:', response.status);
        console.log('Response data:', response.data);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });