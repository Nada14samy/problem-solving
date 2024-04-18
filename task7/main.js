// 7- 
let letter = window.prompt('letter');
function character(name) {
    let cul = name*2;
    if (isNaN(cul) == false) {
        document.querySelector('h1').innerHTML = 'it is a number';
    }else if (isNaN(cul) == true) {
        if (name == 'a' || name == 'o' || name == 'i' || name == 'u' || name == 'e') {
            document.querySelector('h1').innerHTML = 'Vowel';
        }else{
            document.querySelector('h1').innerHTML = 'Consonant';
        }
    }else{
        document.querySelector('h1').innerHTML = 'ERROR';
    }
}
character(letter.toLowerCase());
