let searchValue = document.getElementById('valueSearch')
let city = document.getElementById('city')
let temperature = document.getElementById('temperature')
let description = document.querySelector('.description')
let clouds = document.getElementById('clouds')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let main = document.querySelector('main');


let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(searchValue.value !== '') {
    searchWeather()
  }
})
let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = () => {
  fetch(url + '&q=' + searchValue.value).then((res) => res.json()).then((res) => {
    console.log(res)
    if(res.cod === 200) {
      city.querySelector('figcaption').innerHTML = res.name;
      city.querySelector('img').src = `https://flagsapi.com/${res.sys.country}/shiny/32.png`;
      temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${res.weather[0].icon}@4x.png`;
      temperature.querySelector('span').innerText = res.main.temp;
      description.innerText = res.weather[0].description;
      clouds.innerText = res.clouds.all;
      humidity.innerText = res.main.humidity;
      pressure.innerText = res.main.pressure;
    } else {
      main.classList.add('error');
      setTimeout(() => {
          main.classList.remove('error');
      }, 1000);
    }
    valueSearch.value = '';
  })
}

const initApp = () => {
  valueSearch.value = 'Washington';
  searchWeather();
}

initApp()