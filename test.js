var a = [1, 4, 3, 2],
  b = [0, 2, 1, 2]

var x = a.map(function(item, index) {
  // In this case item correspond to currentValue of array a, 
  // using index to get value from array b
  return item - b[index];
})
console.log(x);