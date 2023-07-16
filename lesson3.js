// Example 1 - Основи об'єктів

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user['mood'] = 'happy';
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// console.log('user', user);

// let userKeys = Object.keys(user);
// console.group();
// for (let key of userKeys) {
//   console.log(`${key}:${user[key]}`);
// }
// console.groupEnd();

// Example 2 - метод Object.values()

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Peter: 130,
// };
// let sum = 0;
// for (let salary of Object.values(salaries)) {
//     sum += salary
// };
// console.log('sum', sum);

// Example 3 - Масив об'єктів

// function calcTotalPrice(stones, stoneName) {
// console.log('stoneName', stoneName);
// for (let stone of stones) {
//   console.log('stone', stone);
//   console.log('stone name', stone.name);
//   console.log('is requested', stone.name === stoneName);
//   if (stone.name === stoneName) {
// return stone.prise * stone.quantity;
//   }
// }
// return null;
// };

// const stones = [
//   {name: 'Smaragd', prise: 1300, quantity: 4},
//   {name: 'Diamant', prise: 2700, quantity: 3},
//   {name: 'Sapfir', prise: 400, quantity: 7},
//   {name: 'Shchebin', prise: 200, quantity: 2},
// ];
// debugger;
// console.log(calcTotalPrice(stones, 'Sapfir'));
// console.log(calcTotalPrice(stones, 'Smaragd'));
// console.log(calcTotalPrice(stones, 'Rubin'));

// Example 4 - Комплексні завдання

// (Date.now() - The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.)

// Скрипт управління особистим кабінетом інет банку. Є об'єкт `account`, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// Типів транзакції два, можна покласти чи зняти гроші з рахунку.
//  const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
//  };

//  // Кожна транзакція це об'єкт із властивостями: id, type та amount

//  const account = {
//   // Поточний баланс рахунку
//   balance: 0,
   
//   // Історія транзакцій
//   transactions: [],

//   // Метод створює та повертає об'єкт транзакції, приймає суму та тип транзакції
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };
//   },
//   // Метод, що відповідає за додавання суми до балансу, приймає суму транзакції, викликає createTransaction для створення об'єкта транзакції, після чого додає його до історії транзакції

//   deposit(amount) {
//     console.log('this', this);
//     let transaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   // Метод, що відповідає за зняття суми з балансу. Приймає суму транзакції. Викликає createTransaction для створення об'єкта транзакції, після чого додає його до історії транзакцій.

//   // Якщо amount більше ніж поточний баланс, виводить поідомлення про те, що зняття такої суми не можливе, недостатньо коштів. 

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.error('недостатньо коштів');
//       return;
//     } 
//     let transaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   // Метод повертає поточний баланс

//   getBalance() {
//     return this.balance;
//   },

//   // Метод шукає та повертає об'єкт транзакції по id

//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return null;
//   },

//   // Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій

//   getTransactionTotal(type) {
//     let sum = 0;
//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
  
//  };

//  account.deposit(1000);
//  account.withdraw(300);
//  account.withdraw(100);
//  account.deposit(200);
//  console.log('balance', account.getBalance());



// # Модуль 3 Заняття 6. Деструктуризація та rest/spread

// ## Example 1 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 3 - Глибока деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
// function getBotReport({ companyName, bots: {repair: repairBots, defence: defenceBots} }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризація

// Допиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
// `companyName` та `stock` та виводила репорт про кількість товарів на складі будь-якої
// компанії.

// ```js
// function getStockReport({ companyName, stock }) {
//   let stockValues = Object.values(stock);
//   let total = 0;
//   for (let count of stockValues) {
//     total += count;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// console.log(
//   getStockReport({
//     companyName: 'GoIT',
//     stock: {
//       js: 5,
//       html: 2,
//       python: 7,
//       css: 2,
//     },
//   }),
// ); // "GoIT has 16 item in stock"
// ```

// ## Example 5 - Операція spread

// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.

// ```js
// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date().toLocaleString(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// ```

// ## Example 6 - Операція rest

// Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю
// `fullName`, замість `firstName` та `lastName`.

// ```js
// function transformUserName({ firstName, lastName, ...props }) {
//   let fullName = `${firstName} ${lastName}`;

//   return {
//     fullName,
//     ...props
//   };
// }

// console.log(
//   transformUserName({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//     phone: '123123123'
//   }),
// );

// console.log(
//   transformUserName({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//  return null;
//   // Change code above this line
// }




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let resalt = `Potion ${oldName} is not in inventory`;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (oldName === potion.name) {
//         potion.name = newName;
//         resalt = `Found ${oldName} change to ${newName} `;
//       }
//     }
//     return console.log(resalt);
//   },
  
// };



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);     
//       }
//     }

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//    // let resalt = `Potion ${oldName} is not in inventory`;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }
//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//   // Change code above this line
//   },
// };
