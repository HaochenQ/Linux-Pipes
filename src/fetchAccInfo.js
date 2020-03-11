import React, { Component } from "react";
const $ = window.$;

class fetchAccInfo extends Component{
    render(){
  
      $.ajax({
        method: 'get',
        url: 'mssql-api.psychpress.com.au/dev/userids',
        headers: {
          'Content-Type': ' application/json',
          'x-api-key': 'PBqMENhgKS2ztAJQU1SQyavlUu6Rc3g84P1ssVDH'
        },
        success : function(idList){
          idList.array.forEach(element => {
            $.ajax({
              method: 'get',
              url:`mssql-api.psychpress.com.au/dev/account/${element['userid']}`,
              headers: {
                'Content-Type': ' application/json',
                'x-api-key': 'PBqMENhgKS2ztAJQU1SQyavlUu6Rc3g84P1ssVDH'
              },
              success: function(accountInfo){
                let row = <tr>
                <th>{accountInfo[0]['UserID']}</th>
                <td>{accountInfo[0]['Company']}</td>
                <td>{accountInfo[0]['SetupDate']}</td>
                <td>{accountInfo[0]['BatteryID']}</td>
                <td>{accountInfo[0]['ReportType']}</td>
                <td>{accountInfo[0]['Contact']}</td>
                <td>{accountInfo[0]['SurveyComplete']}</td>
                <td>{accountInfo[0]['Completeddate']}</td>
                <td>{accountInfo[0]['ReportState']}</td>
                <td>{accountInfo[0]['ClientID']}</td>
                <td>{accountInfo[0]['FinControl']}</td>
              </tr> ;
              let $tbody=document.getElementsByTagName("tbody")
              $tbody.appendChild(row);
              }
  
            })
          });
  
        }
      })
    }
  }