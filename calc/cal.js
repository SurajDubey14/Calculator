const result = document.querySelector(".result");
let num1 = document.querySelector(".input1");
let num2 = document.querySelector(".input2");
let wait = document.querySelector(".wait");
// console.log(num1);
// console.log(num2);

const add = () => {
  let output = parseFloat(num1.value) + parseFloat(num2.value);
  // alert(output);
  wait.style.display = "none";
  // result.e.target.value.innerHTML= " ";
  result.innerHTML = `The result would be like =  ${output}`;
};
const sub = () => {
  if (parseFloat(num1.value) > parseFloat(num2.value)) {
    let output = parseFloat(num1.value) - parseFloat(num2.value);
    // alert(output);
    wait.style.display = "none";
    result.innerHTML = `The result would be like =  ${output}`;
  } else if (parseFloat(num1.value) < parseFloat(num2.value)) {
    let output = parseFloat(num2.value) - parseFloat(num1.value);
    // alert(output);
    wait.style.display = "none";
    result.innerHTML = `The result would be like =  ${output}`;
  } else {
    let output = 0;
    // alert(output);
    wait.style.display = "none";
    result.innerHTML = `The result would be like =  ${output}`;
  }
};
const div = () => {
  if (parseFloat(num1.value) != parseFloat(num2.value)) {
    let output = parseFloat(num1.value) / parseFloat(num2.value);
    // alert(output);
    wait.style.display = "none";
    result.innerHTML = `The result would be like =  ${output}`;
  } else {
    let output = 0;
    // alert(output);
    wait.style.display = "none";
    result.innerHTML = `The result would be like =  ${output}`;
  }
};
const mul = () => {
  let output = parseFloat(num1.value) * parseFloat(num2.value);
  // alert(output);
  wait.style.display = "none";
  result.innerHTML = `The result would be like =  ${output}`;
};

// Old Code

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const operator = button.innerHTML;

//     if (operator === "+") {
//       let output = parseFloat(num1.value) + parseFloat(num2.value);
// wait.style.display = "none";
// result.innerHTML += `${output}`;
//     } else if (operator === "-") {
//       let output = parseFloat(num1.value) - parseFloat(num2.value);
//       wait.style.display = "none";
//       result.innerHTML += `${output}`;
//     } else if (operator === "*") {
//       let output = parseFloat(num1.value) * parseFloat(num2.value);
//       wait.style.display = "none";
//       result.innerHTML += `${output}`;
//     } else if (operator === "/") {
//       let output = parseFloat(num1.value) / parseFloat(num2.value);
//       wait.style.display = "none";
//       result.innerHTML += `${output}`;
//     } else {
//       console.log("Invalid operator");
//     }
//   });
// });
