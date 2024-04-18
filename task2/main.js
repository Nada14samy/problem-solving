const h1 = document.querySelector(".text");
//2- 
let numDivide = prompt("What is a number can divide by 3 and 4 ?");
if (numDivide/3 == 4 || numDivide/4 == 3) 
{
    h1.innerHTML = "Yes";
}
else
{
    h1.innerHTML = "No";
}

// numDivide/3==4||numDivide/4==3?h1.innerHTML="Yes":h1.innerHTML="No";
