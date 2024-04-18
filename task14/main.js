let  Physics = window.prompt('enter the marks of the Physics subjects');
let   Chemistry = window.prompt('enter the marks of the  Chemistry subjects');
let   Biology = window.prompt('enter the marks of the  Biology subjects');
let   Mathematics  = window.prompt('enter the marks of the  Mathematics  subjects');
let   Computer  = window.prompt('enter the marks of the  Computer  subjects');
 
let allSubj = [Physics ,  Chemistry ,  Biology ,  Mathematics  ,  Computer ];

function totalMarks(phy , chemis , bio , math , comp ){
    return phy + chemis + bio + math + comp ; 
}
function AverageMark(){
    return totalMarks(+Physics , + Chemistry , + Biology , + Mathematics  , + Computer ) / allSubj.length ;
}
function  Percentage(){
    let cul = allSubj.length * 100 ; 
    let total = totalMarks(+Physics , + Chemistry , + Biology , + Mathematics  , + Computer ) / cul;
    return (total)*100;
}
function grade(percent) {
    if (percent >= 90) {
        return `grade A`;
    }else if (percent >= 80) {
        return `grade B`;
    }else if (percent >= 70) {
        return `grade C`;
    }else if (percent >= 60) {
        return `grade D`;
    }else if (percent >= 50) {
        return `grade E`;
    }else {
        return `grade F`;
    }
}
function result(per , gra) {
    document.querySelector('h1').innerHTML = `Percentage: ${per}%`;
    document.querySelector('h2').innerHTML = `Grade: ${gra}`;
}
result(Percentage() , grade(Percentage()));