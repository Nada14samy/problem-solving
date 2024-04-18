const h1 = document.querySelector(".text");
//3-
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the last number");

if (num1 > num2) 
{
    h1.innerHTML = num1;
}
else if (num2 > num1)
{
    h1.innerHTML = num2;
}
else
{
    h1.innerHTML = "The two number are equal";
}

// num1>num2?h1.innerHTML=num1:num2>num1?h1.innerHTML=num2:h1.innerHTML="The number are equal";
