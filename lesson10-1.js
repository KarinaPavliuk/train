const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
search.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault()
  //console.log(evt.currentTarget.elements); //можна побачити, що маємо доступ до параметрів days та query, які прописали самостійно
  const {query, days} = evt.currentTarget.elements
  console.log(query);
  console.log(days);

  getWeather(query.value, days.value)
  .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday))) //дістались до масиву об'єктів
  .catch(err => console.log(err));
  
}

function getWeather(city, days) {
  // http://api.weatherapi.com/v1/forecast.json?key=676870d4c7f344d58c5101903231407&q=Paris&days=5
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = '676870d4c7f344d58c5101903231407';

  return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
  .then(resp => {
      if(!resp.ok) {
          throw new Error(resp.statusText);
      }
      return resp.json(); //якщо resp.ok - повертаємо розпарсений json
      //метод json повертає Promis, тому потрібно обробити даний парс ще одним ланцюжком then
      //всередині функції, яка опрацьовує запит пишуть лише один then, наступний пишуть поза функцією: getWeather().then
      //обов'зково вказуємо, що повертаємо виконання fetch
  })
}

function createMarkup(arr) { //date:2023-07-16, day: {avgtemp_c: 23.3, condition:{icon://cdn.weatherapi.com/weather/64x64/day/113.png, text:Sunny}
  return arr.map(({date, day:{avgtemp_c, condition:{icon, text}}}) => `<li> 
  <img src="${icon}" alt="${text}">
  <p>${text}</p>
  <h2>${date}</h2>
  <h3>${avgtemp_c}</h3>
</li>`).join('')
}