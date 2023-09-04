let okey;
let noram = null;
let normal = 0;
let x = noram + normal;

let y = string('10');
let t = string('');
let p = string('строка');
let f = string('null');
let z = string('undefined');
let c = string(undefined);
let o = string(null);


let y1 = parseInt('10');
let t1 = parseInt('');
let p1 = parseInt('строка');
let f1 = parseInt('null');
let z1 = parseInt('undefined');
let c1 = parseInt(undefined);
let o1 = parseInt(null);





console.log('\'\\ \u{2603}  \\\'');

a = 3;
if (a === '1') {
	console.log('Correct');
} else console.log('Incorrect');

console.log(a === '1' ? 'correct' : 'incorrect');

let nm1 = 5;
let nm2 = 9;

if (nm1 < 0 && nm2 < 0) {
	counter = (nm1 + nm2) ** 2;
} else counter = (nm1 * nm2) * 2;
console.log(counter);
console.log(nm1 < 0 && nm2 < 0 ? (nm1 + nm2) ** 2 : (nm1 * nm2) * 2);

if (nm1 <= 1 && nm2 >= 3) {
	console.log(nm1 - nm2);
} else console.log(nm1 + nm2);
console.log(nm1 <= 1 && nm2 >= 3 ? nm1 - nm2 : nm1 + nm2);

if (nm1 > 2 && nm2 < 11 || b >= 6 && b <= 14) {
	console.log('correct');
} else console.log('incorrect');

console.log(nm1 > 2 && nm2 < 11 || b >= 6 && b <= 14 ? 'correct' : 'incorrect');