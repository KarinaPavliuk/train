// // # Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach

// // ## Example 1 - Коллбек функції

// // Напишіть наступні функції:

// // - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
// //   коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
// //   властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// // - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
// //   консоль
// // - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну 
// //   вартість товару в консоль

// // ```js
// // function logProduct(product) {
// //     console.log(product);
// // }
// // function logTotalPrice(product) {
// //     console.log(product.price * product.quantity);
// // }
// // function alertTotalPrice(product) {
// //     alert(product.price * product.quantity);
// // }

// // function createProduct(obj, callback) {
// //     let product = {
// //         ...obj,
// //         id: Math.random().toString(36).substring(2),
// //     };
// //     callback(product);
// //     return product;
// // }
// // let product1 = { name: '🍎', price: 30, quantity: 3 };
// // let product2 = { name: '🍋', price: 20, quantity: 5 };

// // createProduct(product1, logProduct);
// // createProduct(product1, logTotalPrice);

// // createProduct(product2, logProduct);
// // createProduct(product2, logTotalPrice);
// // createProduct(product2, alertTotalPrice);
// // ```

// // ## Example 2 - Коллбек функції

// // Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
// // `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// // другий та третій - коллбеки.

// // Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// // this.balance, і onSuccess в іншому випадку.

// // Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// // або дорівнює нулю, і onSuccess в іншому випадку.

// // ```js
// // // Рішення
// // const TRANSACTION_LIMIT = 1000;

// // const account = {
// //   username: 'Jacob',
// //   balance: 400,
// //   withdraw(amount, onSuccess, onError) {
// //     if (amount > TRANSACTION_LIMIT) {
// //         onError('Перевищено ліміт транзакції');
// //     } else if (amount > this.balance) {
// //         onError('На рахунку не достатньо коштів');
// //     } else {
// //         this.balance -= amount;
// //         onSuccess();
// //     }
// //   },
// //   deposit(amount, onSuccess, onError) {
// //     if (amount > TRANSACTION_LIMIT) {
// //         onError('Перевищено ліміт транзакції');
// //     } else if (amount <= 0) {
// //         onError('Розмір транзакції має бути додатнім');
// //     } else {
// //         this.balance += amount;
// //         onSuccess();
// //     }
// //   },
// // };

// // function handleSuccess() {
// //     console.log('Операція успішна!');
// // }
// // function handleError(errorMessage) {
// //     console.error(errorMessage);
// // }

// // console.log('Balance before:', account.balance);

// // account.withdraw(2000, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// // account.deposit(100, handleSuccess, handleError);
// // account.deposit(0, handleSuccess, handleError);
// // account.deposit(-600, handleSuccess, handleError);
// // account.deposit(600, handleSuccess, handleError);

// // console.log('Balance after:', account.balance);
// // ```

// // ## Example 3 - Коллбек функції

// // Напишіть функцію `each(array, callback)`, яка першим параметром очікує
// // масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// // Функція each повинна повернути новий масив, елементами якого будуть результати
// // виклику коллбека.

// // ```js
// // function each(array, callback) {
// //     let newArray = [];
// //     for (let item of array) {
// //         newArray.push(callback(item));
// //     }
// //     return newArray;
// // }

// // function multiplyTwo(value) {
// //     return value * 2;
// // }
// // function minus10(value) {
// //     return value - 10;
// // }
// // function getSqrt(value) {
// //     return Math.sqrt(value);
// // }
// // function ceil(value) {
// //     return Math.ceil(value);
// // }
// // function floor(value) {
// //     return Math.floor(value);
// // }

// // let originalArray = [64, 49, 36, 25, 16];
// // console.log('originalArray', originalArray);

// // let multipliedArray = each(originalArray, multiplyTwo);
// // console.log('multipliedArray', multipliedArray);

// // console.log('minus10:', each(originalArray, minus10));
// // console.log('getSqrt:', each(originalArray, getSqrt));


// // let originalArray2 = [1.5, 2.1, 16.4, 9.7, 11.3];
// // console.log('originalArray2', originalArray2);

// // console.log('ceil:', each(originalArray2, ceil));
// // console.log('floor:', each(originalArray2, floor));
// // ```

// // ## Example 4 - Стрілочні функції

// // Виконайте рефакторинг коду Example 1 за допомогою стрілочних функцій.

// // ```js
// // function createProduct(obj, callback) {
// //     let product = {
// //         ...obj,
// //         id: Math.random().toString(36).substring(2),
// //     };
// //     callback(product);
// //     return product;
// // }
// // let product1 = { name: '🍎', price: 30, quantity: 3 };
// // let product2 = { name: '🍋', price: 20, quantity: 5 };

// // createProduct(product1, value => console.log(value));
// // createProduct(product1, value => console.log(value.price * value.quantity));

// // createProduct(product2, value => console.log(value));
// // createProduct(product2, value => console.log(value.price * value.quantity));
// // createProduct(product2, value => alert(value.price * value.quantity));
// // ```

// // ## Example 5 - Інлайн стрілочні функції

// // Виконайте рефакторинг коду Example 3 за допомогою стрілочних функцій.

// // ```js
// // function each(array, callback) {
// //     let newArray = [];
// //     for (let item of array) {
// //         newArray.push(callback(item));
// //     }
// //     return newArray;
// // }

// // let originalArray = [64, 49, 36, 25, 16];
// // console.log('originalArray', originalArray);

// // let multipliedArray = each(originalArray, value => value * 2);
// // console.log('multipliedArray', multipliedArray);

// // console.log('minus10:', each(originalArray, value => value - 10));
// // console.log('getSqrt:', each(originalArray, value => Math.sqrt(value)));


// // let originalArray2 = [1.5, 2.1, 16.4, 9.7, 11.3];
// // console.log('originalArray2', originalArray2);

// // console.log('ceil:', each(originalArray2, value => Math.ceil(value)));
// // console.log('floor:', each(originalArray2, value => Math.floor(value)));
// // ```

// // ## Example 6 - Метод forEach

// // Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// // ```js
// // function logItems(items) {
// //     console.log(items);
// //     items.forEach((element, index) => {
// //         console.log(`${index + 1} - ${element}`);
// //     });
// // }

// // logItems(['Mango', 'Poly', 'Ajax']);
// // logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// // ```

// // ## Example 7 - Метод forEach

// // Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// // ```js
// // function printContactsInfo({ names, phones }) {
// //   const nameList = names.split(',');
// //   const phoneList = phones.split(',');
// //   nameList.forEach((item, i) => {
// //     console.log(`${nameList[i]}: ${phoneList[i]}`);
// //   });
// // }

// // printContactsInfo({
// //   names: 'Jacob,William,Solomon,Artemis',
// //   phones: '89001234567,89001112233,890055566377,890055566300',
// // });
// // ```

// // ## Example 8 - Метод forEach

// // Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// // ```js
// // function calсulateAverage(...args) {
// //   let total = 0;
// //   args.forEach(item => total += item);
// //   return total / args.length;
// // }

// // console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// // console.log(calсulateAverage(14, 8, 2)); // 8
// // console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// // ```


// // # Модуль 4. Заняття 8. Перебираючі методи масиву

// // ## Колекція об'єктів для всіх прикладів з автомобілями

// // ```js
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 13, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
// ];
// console.table(cars);
// // ```

// // function testArray() {
// //     console.log('original');
// //     console.table(cars);
// //     let newArray = [];
// //     for (let car of cars) {
// //         let modifiedResult = {...car};

// //         modifiedResult.result = car.model === 'F-150';

// //         newArray.push(modifiedResult);
// //     }
// //     console.log('testing');
// //     console.table(newArray);
// // }
// // testArray();

// // ## Example 1 - Метод map

// // Нехай функція `getModels` повертає масив моделей (поле model) всіх
// // автомобілів.

// // ```js
// // const getModels = cars => {
// //     return cars.map(car => car.model);
// // };

// // console.log(getModels(cars));
// // // ['CR-V', 'Accord', ...]
// // ```

// // ## Example 2 - Метод map

// // Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
// // значенням властивості `price` залежно від переданої знижки.

// // ```js
// // const makeCarsWithDiscount = (cars, discount) => {
// //     return cars.map(car => {
// //         return {
// //             ...car,
// //             price: car.price * ((100 - discount) / 100)
// //         };
// //     });
// // };

// // console.table(makeCarsWithDiscount(cars, 20));
// // console.table(makeCarsWithDiscount(cars, 40));
// // ```

// // ## Example 3 - Метод filter

// // Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша
// // ніж значення параметра `maxPrice`.

// // ```js
// // const filterByPrice = (cars, maxPrice) => {
// //     return cars.filter(car => car.price <= maxPrice);
// // };

// // console.table(filterByPrice(cars, 30000));
// // console.table(filterByPrice(cars, 25000));
// // ```

// // ## Example 4 - Метод filter

// // Нехай функція `getCarsOnSale` повертає масив автомобілів властивість
// // onSale яких true.

// // ```js
// // function getCarsOnSale(cars) {
// //     return cars.filter(car => car.onSale);
// // }

// // console.table(getCarsOnSale(cars));
// // ```

// // ## Example 5 - Метод filter

// // Нехай функція `getCarsByType` повертає масив автомобілів тип яких
// // збігається зі значенням параметра `type`.

// // ```js
// // function getCarsByType(cars, type) {
// //     return cars.filter(car => car.type === type);
// // };

// // console.table(getCarsByType(cars, 'suv'));
// // console.table(getCarsByType(cars, 'sedan'));
// // ```

// // ## Example 6 - Метод find

// // ```js
// // function getCarByModel(cars, model) {
// //     return cars.find(car => car.model === model);
// // }

// // console.log(getCarByModel(cars, 'F-150'));
// // console.log(getCarByModel(cars, 'CX-9'));
// // ```

// // ## Example 7 - Метод sort

// // Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за 
// // зростанням значення якості `amount`.

// // ```js
// // function sortByAscendingAmount(cars) {
// //     let carsCopy = [...cars];

// //     carsCopy.sort((a, b) => {
// //         if (a.amount > b.amount) {
// //             return 1;
// //         }
// //         if (a.amount < b.amount) {
// //             return -1;
// //         }
// //         return 0;
// //     });

// //     return carsCopy;
// // }

// // console.table(sortByAscendingAmount(cars));
// // ```

// // ## Example 8 - Метод sort

// // Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
// // відсортований за зменшенням значення властивості `price`.

// // ```js
// // function sortByDescendingPrice(cars) {
// //     let carsCopy = [...cars];

// //     carsCopy.sort((a, b) => {
// //         if (a.price < b.price) {
// //             return 1;
// //         }
// //         if (a.price > b.price) {
// //             return -1;
// //         }
// //         return 0;
// //     });

// //     return carsCopy;
// // }

// // console.table(sortByDescendingPrice(cars));
// // ```

// // ## Example 9 - Метод sort

// // Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
// // за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// // значення параметра `order`.

// // ```js
// // function sortByModel(cars, order) {
// //     let carsCopy = [...cars];

// //     carsCopy.sort((a, b) => {
// //         if (a.model > b.model) {
// //             return order === 'asc' ? 1 : -1;
// //         }
// //         if (a.model < b.model) {
// //             return order === 'asc' ? -1 : 1;
// //         }
// //         return 0;
// //     });

// //     return carsCopy;
// // }

// // console.table(sortByModel(cars, 'asc'));
// // console.table(sortByModel(cars, 'desc'));
// // ```

// // ## Example 10 - Метод reduce

// // Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// // властивостей `amount`).

// // ```js
// // function getTotalAmountOldSchool(cars) {
// //     let sum = 0;

// //     for (let car of cars) {
// //         sum += car.amount;
// //     }

// //     return sum;
// // }
// // function getTotalAmount(cars) {
// //     return cars.reduce((sum, car) => sum + car.amount, 0);
// // }

// // console.log(getTotalAmountOldSchool(cars));
// // console.log(getTotalAmount(cars));
// // ```

// // ## Example 11 - Ланцюжки методів

// // Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// // тільки тих, які зараз на розпродажі.

// // ```js
// // function getModelsOnSale(cars) {
// //     return cars
// //         .filter(car => car.onSale)
// //         .map(car => car.model);
// // }

// // console.log(getModelsOnSale(cars));
// // ```

// // ## Example 12 - Ланцюжки методів

// // Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// // (Властивість onSale), відсортованих за зростанням ціни.

// // ```js
// // function getSortedCarsOnSale(cars) {
// //     return cars
// //         .filter(car => car.onSale)
// //         .sort((a, b) => {
// //             if (a.price > b.price) {
// //                 return 1;
// //             }
// //             if (a.price < b.price) {
// //                 return -1;
// //             }
// //             return 0;
// //         });
// // }

// // console.table(getSortedCarsOnSale(cars));
// // ```

