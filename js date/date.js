

const birthday = new Date('April 05, 1998');
const date1 = birthday.getDate();
console.log(date1);

const independenceday = new Date('August 15, 2020');
const date2 = independenceday.getDay();
console.log(date2);

const republicday = new Date('january 26');
console.log(republicday.getMonth());

const goodtime = new Date('March 13, 08 04:20:22');
console.log(goodtime.getHours());

const goodmin = new Date('March 13, 08 04:20:22');
console.log(goodmin.getMinutes());
 
const goodsec = new Date('March 13, 08 04:20:22');
console.log(goodsec.getSeconds());

const  goodmilli = new Date('July 20, 69 00:20:18');q
goodmilli.setMilliseconds(123);
console.log(goodmilli.getMilliseconds());

const date3 = new Date('july 10,2022 12:59:00 GMT+02:00');
const date4 = new Date('july 10,2022 12:59:00 GMT-20:00');
console.log(date3.getUTCDate());
console.log(date4.getUTCDate());

const newyear = new Date(2023, 0, 01, 0, 0, 1);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
console.log(newyear.toString());
console.log(newyear.toDateString());
console.log(newyear.toLocaleString('en-US', options));
console.log(newyear.toLocaleDateString('en-US', options));
console.log(newyear.toLocaleTimeString('en-US', options));
