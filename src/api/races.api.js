function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(`HTTP Error ${response.status} ${response.statusText}`);
	error.status = response.statusText;
	error.response = response;
	console.log(error);
	throw error;
}

function parseJson(response) {
	return response.json();
}

function sortByNameDescending(slice) {
	if (!slice instanceof Array) {
		return slice
	}
	return slice.sort(function sortName(a, b) {
		var nameA = a.name.toUpperCase();
		var nameB = b.name.toUpperCase();
		return nameA === nameB ? 0 : nameA < nameB ? 1 : -1;
	})
}

function httpRaceCall(id) {
	return fetch('http://' + window.location.hostname + ':8080/api/races/' + id, {
		method: 'get',
		mode: "cors", // no-cors, cors, *same-origin
        headers: {
			accept: 'application/json'
		}
	});
}

function httpRacesCall() {
	return fetch('http://' + window.location.hostname + ':8080/api/races', {
		method: 'get',
		mode: "cors", // no-cors, cors, *same-origin
        headers: {
			accept: 'application/json'
		}
	});
}

export function getRace(id) {
	return httpRaceCall(id)
		.then(checkStatus)
		.then(parseJson);
}

export function getRaces() {
	return httpRacesCall()
		.then(checkStatus)
		.then(parseJson)
    .then(sortByNameDescending);
}

