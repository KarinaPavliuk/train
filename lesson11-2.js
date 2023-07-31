// // 'https://restcountries.com/v3.1/name/'

// // async function getCapital() {
// //   //Лише у випадку, коли з даними працюємо всередині функції
// //   try {
// //     const URL = "https://restcountries.com/v3.1/name/";
// //     const resp = await fetch(`${URL}Ukraine`);
// //     if (!resp.ok) {
// //       throw new Error(resp.statusText);
// //     }
// //     const data = await resp.json();
// //     console.log(data);
// //     console.log(resp);
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }

// // getCapital();

// // async function getCapital() {
// //   // У випадку, коли з даними працюємо за межами функції
// //   const URL = "https://restcountries.com/v3.1/name/";
// //   const resp = await fetch(`${URL}Ukraine`);
// //   if (!resp.ok) {
// //     throw new Error(resp.statusText);
// //   }
// //   return resp.json();
// // }

// // getCapital()
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// //-----------------------------------------------------

// // Паралельні запити

// async function getCapital() {
//   const URL = "https://restcountries.com/v3.1/name/";
//   const arr = ["Ukraine", "France", ";s;s;s"];

//   const responses = arr.map(async (ctr) => {
//     const resp = await fetch(`${URL}${ctr}`);
//     if (!resp.ok) {
//       throw new Error("Not found");
//     }
//     return resp.json();
//   });

//   const prom = await Promise.allSettled(responses);
//   return prom;
// }
// getCapital()
//   .then((data) => {
//     const resp = data
//       .filter(({ status }) => status === "fulfilled")
//       .map(({ value }) => value[0]);
//     console.log(resp);
//   })
//   .catch((e) => console.log(e));

const searchForm = document.querySelector(".js-search");
const addCountry = document.querySelector(".js-add");
const list = document.querySelector(".js-list");
const formContainer = document.querySelector(".js-form-container");
const markup = `<input type="text" name="country"/>`;

addCountry.addEventListener("click", handlerAddInput);

function handlerAddInput() {
  formContainer.insertAdjacentHTML("beforeend", markup);
}

searchForm.addEventListener("submit", handlerForm);

function handlerForm(evt) {
  evt.preventDefault();

  const data = new FormData(evt.currentTarget);
  const arr = data
    .getAll("country")
    .filter((item) => item) //фільтруємо інпути, що порожні
    .map((item) => item.trim()); //забираєм пробіли (через фільтр трім не працює, повертає значення, що отримав)

  getCountries(arr)
    .then(async (resp) => {
      const capitals = resp.map(({ capital }) => capital[0]);
      const weatherService = await getWeather(capitals);
      list.innerHTML = createMarkup(weatherService);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      formContainer.innerHTML = markup;
      searchForm.reset();
    });
}

async function getCountries(arr) {
  const resps = arr.map(async (item) => {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  });

  const data = await Promise.allSettled(resps);
  const countryObj = data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0]);
  return countryObj;
}

async function getWeather(arr) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "676870d4c7f344d58c5101903231407";

  const resps = arr.map(async (city) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: city,
      lang: "uk",
    });

    const resp = await fetch(`${BASE_URL}/current.json?${params}`);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(resps);
  const obj = data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);

  console.log(obj);
  return obj;
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        current: {
          temp_c,
          condition: { text, icon },
        },
        location: { country, name },
      }) => `<li>
        <div>
          <h2>${country}</h2>
          <h3>${name}</h3>
        </div>
        <img src="${icon}" alt="${text}">
        <p>${text}</p>
        <p>${temp_c}</p>
      </li>`,
    )
    .join("");
}
