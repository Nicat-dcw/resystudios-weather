**WeatherAPI** - Learn Weather Info a Basic Method.

- Mention:
```js
const weather = require("weather-api-plus")
```

- Start The Code:
```js
module.exports = async() => {
const check = await weather({
	country: "Azerbaijan", // All Locations Allowed But not armenia
	days: 3 //1,2,3,4,.....
})
console.warn(`Weather Info: ${check}`)

```

**📎 | Functions**

Name | Info | Use
------------ | ------------ | -------------
country | Entering Country Name and Finding Country's Weather Information | {country: "Azerbaijanian"}
Days | Enter days to Check since Information | {days: 3}


- 

**Contact: https://web.nicat-dcw.xyz**