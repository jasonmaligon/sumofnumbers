const test = [1, 2, 3, 4];

function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

console.log(sumFor(test));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

console.log(sumWhile(test));

function sumRecursion(list, index) {
  if (index === list.length) {
    return 0;
  }
  return list[index] + sumRecursion(list, index + 1);
}

console.log(sumRecursion(test, 0));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));
