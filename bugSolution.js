function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; 
  }
  return a + b; 
}

console.log(foo(1, null)); // Output: null
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, 0)); // Output: 1
console.log(foo(1, "")); // Output: 1
console.log(foo(undefined, 2)); //Output: null