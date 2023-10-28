function addToDisplay(value) {
  var currentValue = document.getElementById("display").value;
  if (currentValue === "ans") {
    // If the current value is "ans," display the equation on the left and its answer on the right
    var equation = document.getElementById("display").value;
    var result;
    try {
      result = eval(equation);
    } catch (error) {
      result = "Error";
    }
    document.getElementById("display").value = equation + " = " + result;
  } else {
    document.getElementById("display").value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function deleteLastCharacter() {
  var currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}

function evaluate() {
  var expression = document.getElementById("display").value;
  try {
    var result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function sqrt() {
  var currentValue = document.getElementById("display").value;
  var result = Math.sqrt(parseFloat(currentValue));
  if (!isNaN(result)) {
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Error";
  }
}
