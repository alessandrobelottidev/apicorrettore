function isValid(json, id) {
	if ((!isNaN(parseInt(id)) && isFinite(id)) && id < Object.keys(json).length) {
		return true;
	} else {
		return false;
	}
}

module.exports = { isValid }