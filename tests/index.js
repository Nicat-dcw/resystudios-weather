const weather = require("../main")

module.exports = async () => {

let da = await weather({
	country: "Azerbaijan",
	days: 1
})
console.log(da)
}
