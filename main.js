

import { readFileSync } from "fs";

const rawContents = readFileSync("test.txt");
const contents = rawContents.toString();


let count = 0;

for (let i = 0; i < contents.length; i++) {
    const searchTerm = '@softwire.com';
    if (contents.slice(i, i + searchTerm.length) === searchTerm) count++;
}

console.log(count);



const re = /\w+@softwire\.com\b/;

const contentsArr = contents.split(" ");

let emailArr = contentsArr.filter(item => re.test(item));

console.log(emailArr.length);






/*
let textArr = text.split(" ");

let emailArr = textArr.filter(word => (/\w+@\w+\.\w+/).test(word))

console.log(emailArr.length);
*/

