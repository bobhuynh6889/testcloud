import _ from 'lodash';

export function checkEmailValid(text) {
  var format = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (_.isEmpty(text)) {
    return false;
  }
  if (format.test(text)) {
    return true;
  } else {
    return false;
  }
}
