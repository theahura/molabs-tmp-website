/* global gapi */


var spreadsheetId = "1sQspts7pFz7UKXiSv6bmO2-nGx4SgoUbEfj7DdlTNDg";

function start() {
  window.gapi.client.init({
    'apiKey': 'AIzaSyDp2Q8fOxG13sff-eCaEmk-7dGWxnCRJY8',
    'clientId': '310646825075-bf7akocuab5kk83r203lduilgdjp3ole.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/spreadsheets',
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {

  });        
}
window.gapi.load('client:auth2', start)


var insertEmailIntoSpreadsheet = function(email) {
  var params = {
    spreadsheetId: spreadsheetId,
    range: 'Sheet1!A:A',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    responseValueRenderOption: 'FORMATTED_VALUE',
    auth: ''
  };

  var valueRangeBody = {
    values: [
      [email]
    ]
  }
  console.log(gapi);
  var request = window.gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);

  request.then(function(resp) {
    console.log(resp.result);
  }, function(reason) {
    console.error('error: ', reason.result.error.message);
  });
}

export { insertEmailIntoSpreadsheet }
