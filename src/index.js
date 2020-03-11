import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
 
ReactDOM.render(
  <Main/>,
  // <fetchAccInfo/>, 
  document.getElementById("root") 
);

const $ = window.$;
$.ajax({
  method: 'get',
  url: 'dev-mssql-api.psychpress.com.au/dev/userids',
  headers: {
    'Content-Type': ' application/json',
    'x-api-key': 'yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC'
  },
  success: function(response){
    alert(response)
    }
})


// const axios = require('axios');
// async function getIds() {
//   const response = await axios({
//     method: 'get',
//     url: 'dev-mssql-api.psychpress.com.au/dev/userids',
//     headers: {
//       'Content-Type': ' application/json',
//       'x-api-key': 'yVmbiCAWrU9oXdRQ8dpbL5mBBZy71pB52OMy2nqC'
//     }
//   });
//   return response;
// }
// getIds().then(function(idList){
//   alert(idList)
//   })
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