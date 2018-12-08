
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

function sortByNameAscending(slice) {
	if (!slice instanceof Array) {
		return slice
	}
	return slice.sort(function sortName(a, b) {
		var nameA = a.Name.toUpperCase();
		var nameB = b.Name.toUpperCase();
		return nameA === nameB ? 0 : nameA > nameB ? 1 : -1;
	})
}

function httpGetTeamsCall(raceID) {
	return fetch('http://' + window.location.hostname + ':8080/api/races/' + raceID + '/teams', {
		method: 'get',
		mode: "cors", // no-cors, cors, *same-origin
        headers: {
			accept: 'application/json'
		}
	});
}

function httpAddLapCall(raceID, bibnumber) {
	return fetch('http://' + window.location.hostname + ':8080/api/races/' + raceID + '/bibnumber/' + bibnumber + '/laps', {
		method: 'post',
		mode: "cors", // no-cors, cors, *same-origin
        headers: {
			accept: 'application/json'
		}
	});
}

export function getTeams(raceID) {
	return httpGetTeamsCall(raceID)
		.then(checkStatus)
		.then(parseJson)
    	.then(sortByNameAscending);
}

export function addLap(raceID, bibnumber) {
	return httpAddLapCall(raceID, bibnumber)
		.then(checkStatus)
		.then(parseJson);
}
