import React, { Component } from "react";

// async function getIds() {
//   const response = await axios({
//     method: 'get',
//     url: 'mssql-api.psychpress.com.au/dev/userids',
//     headers: {
//       'Content-Type': ' application/json',
//       'x-api-key': 'PBqMENhgKS2ztAJQU1SQyavlUu6Rc3g84P1ssVDH'
//     }
//   });
//   return response;
// }


// async function getAccInfo(id) {
//   const response = await axios({
//     method: 'get',
//     url: `mssql-api.psychpress.com.au/dev/account/${id}`,
//     headers: {
//       'Content-Type': ' application/json',
//       'x-api-key': 'PBqMENhgKS2ztAJQU1SQyavlUu6Rc3g84P1ssVDH'
//     }
//   });
//   return response;
// }

const $ = window.$;
const axios = require('axios');
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

function generateData() {
  getIds().then(function(idList){
    alert(idList)
    })
  // $.ajax({
    // method: 'get',
    // url: 'dev-mssql-api.psychpress.com.au/dev/userids',
    // headers: {
    //   'Content-Type': ' application/json',
    //   'x-api-key': 'yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC'
    // },
  //   success: function (idList) {
  //     alert(idList)
  //     idList.array.forEach(element => {
  //       $.ajax({
  //         method: 'get',
  //         url: `dev-mssql-api.psychpress.com.au/dev/account/${element['userid']}`,
  //         headers: {
  //           'Content-Type': ' application/json',
  //           'x-api-key': 'yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC'
  //         },
  //         success: function (accountInfo) {
  //           let row = <tr>
  //             <th>{accountInfo[0]['UserID']}</th>
  //             <td>{accountInfo[0]['Company']}</td>
  //             <td>{accountInfo[0]['SetupDate']}</td>
  //             <td>{accountInfo[0]['BatteryID']}</td>
  //             <td>{accountInfo[0]['ReportType']}</td>
  //             <td>{accountInfo[0]['Contact']}</td>
  //             <td>{accountInfo[0]['SurveyComplete']}</td>
  //             <td>{accountInfo[0]['Completeddate']}</td>
  //             <td>{accountInfo[0]['ReportState']}</td>
  //             <td>{accountInfo[0]['ClientID']}</td>
  //             <td>{accountInfo[0]['FinControl']}</td>
  //           </tr>;
  //           let $tbody = document.getElementsByTagName("tbody")
  //           $tbody.appendChild(row);
  //         }

  //       })
  //     });

  //   }
  // })


}

function sortTable (){

  

  // const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

  // const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
  //     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
  //     )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
  
  // // do the work...
  // document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
  //     const table = th.closest('table');
  //     Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
  //         .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
  //         .forEach(tr => table.appendChild(tr) );
  // })));


}




class Main extends Component {

  render() {
    return (

      <div>
        <h1 className="title is-2 has-text-centered">Account Information</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th><abbr title="User ID">ID</abbr></th>
                <th>Company</th>
                <th>Setupdate</th>
                <th>BatteryID</th>
                <th>ReportType</th>
                <th>Contact</th>
                <th>SurveyComplete</th>
                <th>Completeddate</th>
                <th>ReportState</th>
                <th>ClientID</th>
                <th>FinControl</th>
              </tr>
            </thead>
            <tbody>
              {generateData()}
              
              <tr>
                <th>1</th>
                <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                </td>
                <td>38</td>
                <td>23</td>
                <td>12</td>
                <td>3</td>
                <td>68</td>
                <td>36</td>
                <td>+32</td>
                <td>81</td>
                <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
              </tr>
              <tr>
                <th>8</th>
                <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></td>
                <td>38</td>
                <td>16</td>
                <td>12</td>
                <td>10</td>
                <td>63</td>
                <td>50</td>
                <td>+13</td>
                <td>60</td>
                <td></td>
              </tr>
              <tr>
                <th>9</th>
                <td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></td>
                <td>38</td>
                <td>14</td>
                <td>9</td>
                <td>15</td>
                <td>41</td>
                <td>55</td>
                <td>−14</td>
                <td>51</td>
                <td></td>
              </tr>
              <tr>
                <th>10</th>
                <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>
                <td>38</td>
                <td>12</td>
                <td>14</td>
                <td>12</td>
                <td>59</td>
                <td>53</td>
                <td>+6</td>
                <td>50</td>
                <td></td>
              </tr>
              <tr>
                <th>11</th>
                <td><a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a></td>
                <td>38</td>
                <td>11</td>
                <td>14</td>
                <td>13</td>
                <td>59</td>
                <td>55</td>
                <td>+4</td>
                <td>47</td>
                <td></td>
              </tr>
              <tr>
                <th>12</th>
                <td><a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a></td>
                <td>38</td>
                <td>12</td>
                <td>11</td>
                <td>15</td>
                <td>42</td>
                <td>52</td>
                <td>−10</td>
                <td>47</td>
                <td></td>
              </tr>
              <tr>
                <th>13</th>
                <td><a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a></td>
                <td>38</td>
                <td>12</td>
                <td>9</td>
                <td>17</td>
                <td>40</td>
                <td>50</td>
                <td>−10</td>
                <td>45</td>
                <td></td>
              </tr>
              <tr>
                <th>14</th>
                <td><a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a></td>
                <td>38</td>
                <td>10</td>
                <td>13</td>
                <td>15</td>
                <td>34</td>
                <td>48</td>
                <td>−14</td>
                <td>43</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}


export default Main;
