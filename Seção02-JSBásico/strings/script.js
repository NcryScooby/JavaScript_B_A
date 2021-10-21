let umaString = "Um \"Texto\"";

console.log(umaString);

//////
                //01234567
let umaString2 = 'Um Texto';

console.log(umaString2[4]);
console.log(umaString2.charAt(4));

console.log(umaString2.concat(' Em um lindo dia.'));
console.log(umaString2 + ' Em um lindo dia.');
console.log(`${umaString2} Em um lindo dia.`);
console.log(umaString2.indexOf('Texto'));
console.log(umaString2.lastIndexOf('o'));
console.log(umaString2.match(/[a-z]/g));
console.log(umaString2.search(/x/));
console.log(umaString2.replace('Um', 'Outro'));

let umaString3 = 'O rato roeu a roupa do rei de roma.';

console.log(umaString3.replace(/r/g, '#'))
console.log(umaString3.length);
console.log(umaString3.slice(2, 6));
console.log(umaString3.slice(-5));
console.log(umaString3.slice(-5, -1));

console.log(umaString3.split(' '));
console.log(umaString3.split(' ', 2));
console.log(umaString3.toUpperCase());
console.log(umaString3.toLowerCase());