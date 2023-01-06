//Operations
function ADD()
{
        var num1 = parseInt(document.getElementById("Enter the first number").value);
        var num2 = parseInt(document.getElementById("Enter the second number").value);
        var sum = num1+num2;
        document.getElementById("result").innerHTML = sum;
}

function SUBTRACT()
{
        var num1 = document.getElementById("Enter the first number").value;
        var num2 = document.getElementById("Enter the second number").value;
        var difference = num1-num2;
        document.getElementById("result").innerHTML = difference;
}
function MULTIPLY()
{
        num1 = document.getElementById("Enter the first number").value;
        num2 = document.getElementById("Enter the second number").value;
        var product = num1*num2;
        document.getElementById("result").innerHTML = product;
}

function DIVIDE()
{
        num1 = document.getElementById("Enter the first number").value;
        num2 = document.getElementById("Enter the second number").value;
        var quotient = num1/num2;
        document.getElementById("result").innerHTML = quotient;
}
