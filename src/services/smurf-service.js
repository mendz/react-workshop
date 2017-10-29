export function deleteSmurfs(smurfs) {
	return new Promise(resolve => setTimeout(resolve, 1000));
}

export function getSmurf(smurf) {
	return new Promise(resolve => setTimeout(() => {
		// crunching the data on the item(smurf) and resolve the new data
		resolve(smurf);
	}, 1000));
}