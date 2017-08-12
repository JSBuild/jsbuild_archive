const fs = require('fs');
const path = require('path');
const JSBuild = {};

JSBuild.build = function (options) {
  console.log(' === JSBuild === ');
  console.log(process.cwd());
};

module.exports = JSBuild;

