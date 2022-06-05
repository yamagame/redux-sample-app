function returnNumberFunction(value) {
  return () => value;
}

const value1 = returnNumberFunction(100);

console.log(value1()); // => 100

const value2 = returnNumberFunction(200);

console.log(value2()); // => 200
