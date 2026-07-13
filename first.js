let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

let result = document.getElementById("result");

// Add
add.addEventListener("click", function () {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    result.innerHTML = "Result: " + (num1 + num2);
});

// Subtract
sub.addEventListener("click", function () {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    result.innerHTML = "Result: " + (num1 - num2);
});

// Multiply
mul.addEventListener("click", function () {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    result.innerHTML = "Result: " + (num1 * num2);
});

// Divide
div.addEventListener("click", function () {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    if (num2 === 0) {
        result.innerHTML = "Cannot divide by 0";
    } else {
        result.innerHTML = "Result: " + (num1 / num2);
    }
});