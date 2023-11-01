function calculate(operator) {
  let x = parseFloat(document.getElementById("input-1").value);
  let y = parseFloat(document.getElementById("input-2").value);

  let result;

  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
  }
  document.getElementById("result").innerHTML = result;
}

function display(value) {
  document.getElementById("screen").value += value;
}
function clearDisplay() {
  document.getElementById("screen").value = "";
}

function calculated() {
  let a = document.getElementById("screen").value;
  let b = eval(a);
  document.getElementById("screen").value = b;
}
