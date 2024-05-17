// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return operation(array);
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

const add = function (array) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(array[i] + 5000);
  }
};

// Using `forEach` function here
forEach(employeeSalaries, add);

console.log(newEmployeeSalaries);
