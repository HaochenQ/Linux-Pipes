/**
 * get user ids
 * api: mssql-api.psychpress.com.au/dev/userids
 * dev-mssql-api.psychpress.com.au/dev/userids
 * input: none
 * key: x-api-key PBqMENhgKS2ztAJQU1SQyavlUu6Rc3g84P1ssVDH
 * yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC
 * response: [
    {
        "userid": "BPP710295",
        "completeddate": "2018-05-28T07:11:00.000Z"
    },
    ...
    ...
    {
        "userid": "PP849896",
        "completeddate": "2018-05-26T00:19:00.000Z"
    },
    {
        "userid": "PP769721",
        "completeddate": "2018-05-26T00:17:00.000Z"
    }
]
 */
async function getIds() {
  const response = await axios({
    method: 'get',
    url: 'dev-mssql-api.psychpress.com.au/dev/userids',
    headers: {
      'Content-Type': ' application/json',
      'x-api-key': 'yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC'
    }
  });
  return response;
}



/**
 * get account info
 * api:mssql-api.psychpress.com.au/dev/account/BPP710295
 * dev-mssql-api.psychpress.com.au/dev/account/BPP710295
 * input: user id
 * output: [
   {
       "UserID": "BPP710295",
       "Company": "PP",
       "SetupDate": "2018-05-28T06:11:00.000Z",
       "BatteryID": "BPP_APR18",
       "ReportType": null,
       "Contact": "Free Tests Page",
       "SurveyComplete": true,
       "Completeddate": "2018-05-28T07:11:00.000Z",
       "ReportState": 1,
       "ClientID": null,
       "FinControl": true
   }
]
 */
async function getAccInfo(id) {
  const response = await axios({
    method: 'get',
    url: `dev-mssql-api.psychpress.com.au/dev/account/${id}`,
    headers: {
      'Content-Type': ' application/json',
      'x-api-key': 'yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC'
    }
  });
  return response;
}
