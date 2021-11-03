function arrayOfMultiples (num, length) {

  let arr = [];

  for (let i = 0; i < length; i++) {
      arr = [...arr, num*(i+1)];
  }

  return arr;
}

module.exports = arrayOfMultiples;