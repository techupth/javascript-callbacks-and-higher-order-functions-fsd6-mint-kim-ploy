//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  return operation(array);
  // Start coding here
}
let roomNumber = 0;
const testResult = function (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      result += 1;
    } else {
      result = result;
    }
  }
  if (result >= 5) {
    result = "ผ่านเกณฑ์ ✅";
    roomNumber += 1;
  } else {
    result = "ไม่ผ่านเกณฑ์ ❌";
    roomNumber += 1;
  }
  return `นักเรียนห้องที่ ${roomNumber} ${result}`;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

//console.log(Object.keys({ studentScoresRoom3 })[0].charAt(17));
// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, testResult);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, testResult);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, testResult);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
