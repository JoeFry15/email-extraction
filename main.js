import { readFileSync } from "fs";

const rawContents = readFileSync("test.txt");
const contents = rawContents.toString();


// check email domains using a loop

let count = 0;

for (let i = 0; i < contents.length; i++) {
    const searchTerm = '@softwire.com';
    if (contents.slice(i, i + searchTerm.length) === searchTerm) count++;
}

console.log(count);


// check email domains using a regex

const re = /\w+@softwire\.com\b/;

const contentsArr = contents.split(" ");

let emailArr = contentsArr.filter(item => re.test(item));

console.log(emailArr.length);



// add email domains to a dictionary

let emailDict = {};

const reDict = /\w+@(\w+\.\w+)\b/;

const contentsArrDict = contents.split(" ");

let emailArrDict = contentsArrDict.filter(item => reDict.test(item));

let emailDomainsArr = emailArrDict.map(item => extractEmailDomain(item));

for (const iterator of emailDomainsArr) {
    iterator in emailDict ? emailDict[iterator]++ : emailDict[iterator] = 1;
}

console.log(emailDict);




function extractEmailDomain(email) {
    var rx = /\w+@(\w+\.\w+(\.\w+)?)\b/;
    var arr = rx.exec(email);
    return arr[1];
}

