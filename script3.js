// const str = 'Мама мыла раму';
// const num = 2;
//
// function maskWords(string, number) {
//     if (number === 0) {
//         return string;
//     }
//
//     const sepString = string.split('')
//
//     for (let i = string.length - 1; i >= 0; i--) {
//
//         if (number === 0) {
//             break;
//         }
//         if (sepString[i] === ' ') {
//             number--;
//             continue;
//         }
//
//         sepString[i] = '*';
//     }
//
//     return sepString.join('');
//
// }
//
// console.log(maskWords(str, num));