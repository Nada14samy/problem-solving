// 9-
let letter = window.prompt('letter');
function character(name) {
    switch (name) {
        case 'a':
        case 'o':
        case 'i':
        case 'u':
        case 'e':
            document.querySelector('h1').innerHTML = 'Vowel';
            break;
        default:
            document.querySelector('h1').innerHTML = 'Consonant';
            break;
    }
}
character(letter.toLowerCase());
