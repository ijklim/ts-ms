const moment = require('moment');

module.exports = function (arg) {
  let datetime;

  if (!arg) return;

  if (('' + arg).match(/^[\d]+$/)) {
    // arg is potential unix timestamp
    datetime = (new Date());
    datetime.setTime(arg);
  } else {
    datetime = (new Date(arg));
  }

  if (!datetime || typeof datetime.getTime !== 'function' || isNaN(datetime.getTime())) {
    return {
      unix: null,
      natural: null
    }
  }

  return {
    unix: datetime.getTime(),
    natural: moment(datetime).format('MMMM D, YYYY')
  }
}