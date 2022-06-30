const url = 'https://api.openweathermap.org/data/2.5/'
const key = '80df0d5ed52dcb8bdf70f3d543752d47'

const setQuery = (e) => {
if(e.keyCode == '13')
getResult(searchBar.value)
}

const getResult = (cityName) => {
	let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
	fetch(query)
	.then(weather => {
		return weather.json()
	})
	.then(displayResult)
}

const displayResult = (result) => {
	let city = document.querySelector('.city')
	city.innerText = `${result.name}, ${result.sys.country}`
	
	let temp = document.querySelector('.temp')
	temp.innerText = `${Math.round(result.main.temp)}ºC`
	
	let weather = document.querySelector('.weather')
	weather.innerText = result.weather[0].description
	
	let gg = document.querySelector('.gg')
	gg.innerText = `${Math.round(result.main.temp_min)}ºC / ${Math.round(result.main.temp_max)}ºC`
	
	
}
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)