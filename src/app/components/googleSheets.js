// //Submit to google sheets
// var fs = require('fs');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');
// var readline = require('readline');
// console.log(google);
// var sheets = google.sheets('v4');

// var spreadsheetId = "1sQspts7pFz7UKXiSv6bmO2-nGx4SgoUbEfj7DdlTNDg";

// var SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
// var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials';
// var TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis'





// function authorize(credentials, callback, email) {
//   var clientSecret = credentials.installed.client_secret;
//   var clientId = credentials.installed.client_id;
//   var redirectUrl = credentials.installed.redirect_uris[0];
//   var auth = new googleAuth();
//   var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

//   fs.readFile(TOKEN_PATH, function(err, token) {
//     if (err) {
//       getNewToken(oauth2Client, callback, email);
//     } else {
//       oauth2Client.credentials = JSON.parse(token);
//       callback(oauth2Client, email);
//     }
//   });
// }

// function getNewToken(oauth2Client, callback, email) {
//   var authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: SCOPES
//   });
//   console.log('Authorize this app by visiting this url: ', authUrl);
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.question('Enter the code from that page here: ', function(code) {
//     rl.close();
//     oauth2Client.getToken(code, function(err, token) {
//       if (err) {
//         console.log('Error while trying to retrieve access token', err);
//         return;
//       }
//       oauth2Client.credentials = token;
//       storeToken(token);
//       callback(oauth2Client, email);
//     });
//   });
// }

// function storeToken(token) {
//   try {
//     fs.mkdirSync(TOKEN_DIR);
//   } catch (err) {
//     if (err.code != 'EEXIST') {
//       throw err;
//     }
//   }
//   fs.writeFile(TOKEN_PATH, JSON.stringify(token));
//   console.log('Token stored to ' + TOKEN_PATH);
// }

// function appendToSpreadsheet(auth, email) {
//   var request = {
//     spreadsheetId: spreadsheetId,
//     range: 'Sheet1!A:A',
//     valueInputOption: 'RAW',
//     insertDataOption: 'INSERT_ROWS',
//     responseValueRenderOption: 'FORMATTED_VALUE',
//     resource: {
//       values: [
//         [email]
//       ]
//     },
//     auth: auth,
//   }
//   sheets.spreadsheets.values.append(request, function(err, response) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(JSON.stringify(response, null, 2));
//   });
// };

// function insertEmailToSpreadsheet(email) {
//   fs.readFile('client_secret.json', function processClientSecrets(err, content) {
//     if (err) {
//       console.log('Error loading client secret file: ' + err);
//       return;
//     }

//     authorize(JSON.parse(content), appendToSpreadsheet, email)
//   })
// }

// export { insertEmailToSpreadsheet };


