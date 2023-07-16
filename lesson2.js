// Example 1 - Базові операції з масивом

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock-n-roll');
// console.log('genres', genres);
// console.log('first genre', genres[0]);
// console.log('last genre', genres[genres.length-1]);

// Example 2 - Масиви та рядки

// const values = '8 11';

// let valuesParts = values.split(' ');
// let width = Number(valuesParts[0]);
// let height = Number(valuesParts[1]);
// let square = width*height;
// console.log('parts', valuesParts);
// console.log('width', width);
// console.log('height', height);
// console.log('square', square);

// Example 3 - Перебір масиву

// const fruits = ['apple', 'grape', 'peache', 'banana', 'lemon']; 

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }


// Example 4 - Масиви та цикли

// const names = 'Jacob,Williams,Solomon,Artemis';
// const phones = '380985030584,380983993830,380983928503,380984729485';

// const namesParts = names.split(',');
// const phonesParts = phones.split(',');

// for (let i=0; i < namesParts.length; i++) {
// console.log('name', namesParts[i]);
// console.log('phone', phonesParts[i]);
// }

// Example 5 - Масиви та рядки

// const string = 'Welcome to the future';
// let stringParts = string.split(' ');

// console.log('initial', stringParts);
// stringParts.shift();
// console.log('after shift', stringParts);
// stringParts.pop();
// console.log('after pop', stringParts);

// for (let i = 0; i < stringParts.length; i++) {
//   console.log(stringParts[i]);
// }

// or

// for (let i = 1; i < stringParts.length - 1; i++) {
//   console.log(i);
//   console.log(stringParts[i]);
// }

// Example 6 - Масиви та рядки

// const string = 'Welcome to the future';
// let result = '';
// for (let i = string.length - 1; i >= 0; i--) {
//   result += string[i];
// }
// console.log(result);

// or

// let result = string.split('').reverse().join('');
// console.log(result);

// Example 7 - Сортування масиву із циклом

// const langs = ['phyton', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log('original', langs);
// let sortedLangs = langs.sort();
// console.log('sorted', sortedLangs);

// Example 8 - Пошук елемента

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   console.log('i', i);
//   console.log('current element', numbers[i]);
//   if (numbers[i] < min) {
//     console.log('found new min');
//     console.log('old min', min);
//     min = numbers[i];
//   }
// }

// console.log('min', min);

// Example 1 - Індекс маси тіла

function toNumber(str) {
  return Number(str.replace(',', '.'))
}

// function calcBMI(weight, height) {
//   // weight = Number(weight.replace(',', '.'));
// weight = toNumber(weight);

//   let result = weight / (Math.pow(height, 2));
//   return result.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');

// console.log(bmi);



// Example 2 - Найменше з чисел

//function min(a, b) {

  //return (a < b) ? a : b;

//or

//   if (a < b) {
//     return a;
//   } return b; 
//}

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Example 3 - Площа прямокутника

// function getRectArea(dimensions) {
//   let dimensionsParts = dimensions.split(' ');
//   let width = toNumber(dimensionsParts[0]);
//   let height = toNumber(dimensionsParts[1]);
//   return width * height;
// }

// console.log(getRectArea('8,5 11.5'));

//Example 4 - Логування елементів

// function logItems(items) {
//   console.group('logItems');
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
//   console.groupEnd();
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 5 - Логування контактів

// function printContactsInfo(names, phones) {
//   let namesParts = names.split(',');
//   let phonesParts = phones.split(',');
//   console.log('namesParts', namesParts);
//   console.log('phonesParts', phonesParts);
//   for (let i = 0; i < namesParts.length; i++) {
//     console.log(`${namesParts[i]} - ${phonesParts[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,Williams,Solomon,Artemis',
//   '38098392039,380984895039,380984820394,38098380493',
// );

// Example 6 - Пошук  найбільшого елемента

// function findLargestNumber(numbers) {
//     let max = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > max) {
//         max = numbers[i];
//       }
//     }
//     return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); 
// console.log(findLargestNumber([49, 4, 7, 83, 12]));

// Example 7 - Середнє значення

// function calAverage() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//     }
//  return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

// Example 8 - Форматування часу

// function formatTime(totalMinutes) {
//  const hours = Math.floor(totalMinutes / 60);
//  const minutes = totalMinutes % 60;
 
//  const doubleDigitHours = String(hours).padStart(2, 0);
//  const doubleDigitMinutes = String(minutes).padStart(2, 0);
//  return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));


// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// console.log('original', courses);

// function addCourse(name) {
// if (!courses.includes(name)) {
//   courses.push(name);
// }
// }

// function removeCourse(name) {
//   let index = courses.indexOf(name);
//   if (index > -1) {
//     courses.splice(index, 1);
//   }
// }

// function updateCourse(oldName, newName) {
//   let index = courses.indexOf(oldName);
//   if (index > -1) {
//     courses[index] = newName;
//   }
// }

// addCourse('Express');
// console.log('v1', courses);
// addCourse('CSS');
// console.log('v2', courses);

// removeCourse('React');
// console.log('v3', courses);
// removeCourse('Vue');
// console.log('v4', courses);

// updateCourse('Express', 'NestJS');
// console.log('v5', courses);
