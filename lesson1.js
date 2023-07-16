

// Example 4 - Клас Math

// const value = 27.5;

// console.log('original', value);
// console.log('floor', Math.floor(value));
// console.log('ceil', Math.ceil(value));
// console.log('round', Math.round(value));

//Example 5 - Шаблонні рядки

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = ``;
// console.log(message);

// Example 6 - Методи рядків та чейнінг

// let weight = '88,3';
// const height = Number('1.75');

// weight = weight.replace(',', '.');

// const bmi = weight / (Math.pow(height, 2));
// console.log(bmi.toFixed(1));

// Example 7 - Оператори порівняння та приведення типів




// Example 1 - Введення користувача та розгалуження
// let answer = prompt('Яка офіційна назва JS?');
// if (answer === 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// Exampple 2 - Відображення часу (if...else)
// const hours = 14;
// const minutes = 0;
// let timestring;
// timestring = `${hours} г.`;
// if (minutes > 0) {
//   timestring += ` ${minutes} хв.`;
// }
// console.log(timestring);


// Example 3 - Розгалуження
// const userInput = prompt('Введіть число');
// const number = Number(userInput);
// if (number > 0) {
//   console.log('Це позитивне число');
// } else if (number < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Це нуль')
// }

// Example 4 - Вкладені розгалуження
// const a = 120;
// const b = 80;

// if ((a > 100) && (b > 100)) {
//   if (a > b) {
//     console.log('a is max', a)
//   } else if (b > a) {
//     console.log('b is max', b)
//   } else {
//     console.log('a and b are equals', a)
//   }
// } else {
// console.log(`b + 512 = ${b + 512}`)
// }

//Example 5 - Форматування посилання (endsWith)

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
//   console.log('fixed');
// }

// console.log(link);

//Example 6 - Формтування посилання (includes та логічне "І")

// let link = 'https://somesite.com/about';

// if ((!link.endsWith('/')) && link.includes('my-site')) {
//   link += '/';
//   console.log('fixed');
// }

// console.log(link);

//Example 7 - Форматування посилання (тернарний оператор)

// let link = 'https://somesite.com/about';
//  let isNeedToFixUrl = (!link.endsWith('/')) && link.includes('my-site');

// link+= isNeedToFixUrl ? '/' : '';

// console.log(link);

//Example 8 - if...else та логічні оператори

// const hours = 22;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours > 24) {
//   console.log('Overdue');
// } else {
//   console.log('Expires');
// } 

// Example 9 - Дедлайн здачі проекту (if...else)

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому')
// }

// Example 10 - Дедлайн здачі проекту (switch)

// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//   case 0: 
//   console.log('Сьогодні');
//   break;
//   case 1: 
//   console.log('Завтра');
//   break;
//   case 2: 
//   console.log('Післязавтра');
//   break;
//   default: 
//   console.log('Дата у майбутньому');
// }

// Example 11 - Цикл for

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++) {
//   console.log(i);
//   if(i % 5 === 0) {
//     console.log('check');
//   }
// }

// Example 12 - Введення користувача та розгалуження

// let username = prompt('Введіть логін');

// if (!username) {
//   console.log('Скасовано')
// } else if (username === 'бандерівець2023') {
//   let password = prompt('Гасло?!')

//   if (password === "Слава Україні"){
//     console.log('Героям Слава!')
//   } else {
//     console.log('Вийди розбійник!');
//   }
// } else {
//   console.log('Ви хто такі?')
// }