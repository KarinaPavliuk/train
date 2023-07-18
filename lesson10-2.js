
// const BASE_URL = 'https://the-one-api.dev/v2/';
// const END_POINT = 'character';
// const KEY = 'sUNeQIUiq8P-v6eCIUUN';

 
// function getCharacter() {
//   const param = new URLSearchParams({
//     limit: 30,
//     pege: 1,
//   });

//   const option = {
//     method: 'GET',  // якщо метод GET не обов'язково тут вказувати метод
//     headers: {
//       Authorization: `Bearer ${KEY}`
//     }
//   }

//   fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp => console.log(resp));
// }
// getCharacter()



// const BASE_URL = 'https://api.themoviedb.org/3/';
// const END_POINT = 'trending/movie/day';
// const API_KEY = '345007f9ab440e5b86cef51be6397df1';
// const list = document.querySelector('.js-list');
// const loadMore = document.querySelector('.js-load');
// const target = document.querySelector('.js-guard');
// let currentPage = 1;

// let options = {
//   root: null,
//   rootMargin: "200px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);

// function callback(evt) {
//   console.log(evt);
// }

// loadMore.addEventListener('click', onLoad)

// function onLoad() {
//   currentPage += 1;
//   getTrending(currentPage)
//   .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     if(data.page === data.total_pages) {
//       loadMore.hidden = true;
//     }
//   })
//   .catch(err => console.log(err));
// }

// function getTrending(page=1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(resp => {
//     if(!resp.ok){
//       throw new Error(resp.statusText)
//     }

//     return resp.json();
//   })
// }

// getTrending()
// .then(data => {
//   list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//   observer.observe(target) // на екземплярі класу потрібно викликати спостерігач: .observe(target) - спостерігай за target
//   if(data.page !== data.total_pages) {
//     loadMore.hidden = false;
//   }
// })
// .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr.map(({poster_path, title}) => `<li>
//   <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
//   <h2>${title}</h2>
// </li>`).join('')
// }

// let counter = 0;
// document.addEventListener('scroll', onScroll);

// function onScroll() {
//   counter += 1;
//   console.log(counter);
// };


const target = document.querySelector('.js-guard');
const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = 'trending/movie/day';
const API_KEY = '345007f9ab440e5b86cef51be6397df1';
const list = document.querySelector('.js-list');
let currentPage = 1;

let options = {
    root: null,
    rootMargin: "300px",
    threshold: 1.0,
};
  
let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      currentPage += 1;
      getTrending(currentPage)
      .then(data => {
        list.insertAdjacentHTML('beforeend', createMarkup(data.results))
        if(data.page !== data.total_pages) {
          observer.unobserve(target);
        }
      })
      .catch(err => console.log(err));
    }
  });
  
}

function createMarkup(arr) {
  return arr.map(({poster_path, title}) => `<li>
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
    <h2>${title}</h2>
  </li>`).join('')
}

function getTrending(page=1) {
  return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(resp => {
    if(!resp.ok){
      throw new Error(resp.statusText)
    }

    return resp.json();
  })
}

getTrending()
.then(data => {
  list.insertAdjacentHTML('beforeend', createMarkup(data.results));
  observer.observe(target) // на екземплярі класу потрібно викликати спостерігач: .observe(target) - спостерігай за target
  // if(data.page !== data.total_pages) {
  //   loadMore.hidden = false;
  // }
})
.catch(err => console.log(err));