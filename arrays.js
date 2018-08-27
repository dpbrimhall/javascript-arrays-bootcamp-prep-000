var chocolateBars = 
['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var one = [1];
  return ['foo',...one];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var two = [1];
  two.unshift('foo');
  return two;
}

function addElementToEndOfArray(array, element) {
  var three = [1];
  return [...three, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  var four = [1];
  four.push('foo');
  return four
}


function accessElementInArray(array, index) {
  var five = [1, 2, 3];
  return five[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var six = [1, 2, 3];
  six.shift();
  return six
}

function removeElementFromBeginningOfArray(array) {
  newarray = array.slice(1);
  return newarray
}


function removeElementFromEndOfArray(array) {
  newarray = array.slice(0, array.length - 1);
  return newarray
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
