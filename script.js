//This function added numbers that are provided at the time of executing it
function Add(numberOne, numberTwo, callback) {
  callback(numberOne + numberTwo);
}

//This function subtracts numbers that are provided at the time of executing it
function subtract(numberOne, numberTwo, callback) {
  callback(numberOne - numberTwo);
}

//This function multiplies numbers that are provided at the time of executing it
function multiply(numberOne, numberTwo, callback) {
  callback(numberOne * numberTwo);
}

//This function divides numbers that are provided at the time of execution
function split(numberOne, numberTwo, callback) {
  callback(numberOne / numberTwo);
}

//This function makes use of a switch to execute the function add, subtract, multiply or divide as indicated by the user,
//after providing two numbers to make use of the callback
function executeOperation(numberOne, numberTwo, operation) {
  switch (operation) {
    case 1:
      Add(numberOne, numberTwo, (result) => {
        console.log(result);
      });
      break;
    case 2:
      subtract(numberOne, numberTwo, (result) => {
        console.log(result);
      });
      break;
    case 3:
      multiply(numberOne, numberTwo, (result) => {
        console.log(result);
      });
      break;
    case 4:
      split(numberOne, numberTwo, (result) => {
        console.log(result);
      });
      break;
    default:
      console.log("Select Operation 1=add, 2=subtract, 3=multiply, 4=split");
      break;
  }
}

executeOperation(10, 5, 5);
