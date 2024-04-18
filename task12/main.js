// 8-
let  Math = window.prompt('enter the marks of the math subjects');
let  Science = window.prompt('enter the marks of the science subjects');
let  English = window.prompt('enter the marks of the english subjects');
let  Histor = window.prompt('enter the marks of the history subjects');
let  Art = window.prompt('enter the marks of the art subjects');
 
let allSubj = [Math , Science , English , Histor , Art];

function totalMarks(math , sci , en , history , art ){
    return math + sci + en + history + art ; 
}
document.querySelector('h1').innerHTML = `Total Marks: ${totalMarks(+Math , +Science , +English , +Histor , +Art)}`;
function AverageMark(){
    return totalMarks(+Math , +Science , +English , +Histor , +Art) / allSubj.length ;
}
document.querySelector('h2').innerHTML = `Average Marks: ${AverageMark()}`;
function  Percentage(){
    let cul = allSubj.length * 100 ; 
    let total = totalMarks(+Math , +Science , +English , +Histor , +Art) / cul;
    return (total)*100;
}
document.querySelector('h3').innerHTML = `Percentage: ${Percentage()}%`;
