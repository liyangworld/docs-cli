const logSymbols = require("log-symbols");

module.exports = {
  info: function(msg = "") {
    console.log(logSymbols.info, msg);
  },
  success: function(msg = "") {
    console.log(logSymbols.success, msg);
  },
  warn: function(msg = "") {
    console.log(logSymbols.warning, msg);
  },
  error: function(msg = "") {
    console.log(logSymbols.error, msg);
  }
};
