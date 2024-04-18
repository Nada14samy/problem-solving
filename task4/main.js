const h1 = document.querySelector(".text");
// 4-
let num = prompt("enter a number");
if (num.charAt('') === '') 
{
    h1.innerHTML = "Not a number";
}
else if (num < 0)
{
    h1.innerHTML = "negative";
}
else if (num >= 0)
{
    h1.innerHTML = "positive";
}
else
{
    h1.innerHTML = '';
}

// (num.charAt('') === '')?h1.innerHTML = "Not a number":(num < 0)?h1.innerHTML = "negative":(num >= 0)?h1.innerHTML = "positive":h1.innerHTML='';
