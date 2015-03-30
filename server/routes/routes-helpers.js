/**
 * Created by Andrej on 30/03/15.
 */
var makeErrorHandler = function(message, res) {
  return function(error) {
    res.json({
      status: 'FAILED',
      message: message,
      error: error.message
    });
  }
};

module.exports = {
  makeErrorHandler: makeErrorHandler
};