const fs = require('fs');

module.exports = {
  {
    "development": {
      "username": "root",
      "password": null,
      "database": "mailing_list",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": "molabs.ccdbx5sxfhu4.us-east-1.rds.amazonaws.com",
      "dialect": "mysql"
    }
  }  
}

