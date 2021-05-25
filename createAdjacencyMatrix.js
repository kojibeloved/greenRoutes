export function createAdjacencyMatrix(listOfNodes){
	let adjMatrix = new Array(listOfNodes.length).fill(null);

	for (let i = 0; i < listOfNodes.length; i++){
		adjMatrix[i] = new Array(listOfNodes.length).fill(null);
		for (let j = 0; j < listOfNodes.length; j++) {
			if (i === j) {
				adjMatrix[i][j] = 0;
			}
			// check if nodes is connected
			else if (listOfNodes[i].connectedTo.includes(listOfNodes[j].id)){
				adjMatrix[i][j] = Math.floor(calcDistHaver(listOfNodes[i], listOfNodes[j]) * ((listOfNodes[i].greenness + listOfNodes[j].greenness)/2));
			}
		}
	}
	return adjMatrix;
}

export function createNonGreenAdjacencyMatrix(listOfNodes){
	let adjMatrixNonGreen = new Array(listOfNodes.length).fill(null);

	for (let i = 0; i < listOfNodes.length; i++){
		adjMatrixNonGreen[i] = new Array(listOfNodes.length).fill(null);
		for (let j = 0; j < listOfNodes.length; j++) {
			if (i === j) {
				adjMatrixNonGreen[i][j] = 0;
			}
			// check if nodes is connected
			else if (listOfNodes[i].connectedTo.includes(listOfNodes[j].id)){
				adjMatrixNonGreen[i][j] = Math.floor(calcDistHaver(listOfNodes[i], listOfNodes[j]));
			}
		}
	}
	return adjMatrixNonGreen;
}

/* --------- CALCULATE DISTANCE --------- */
function calcDistHaver(node1, node2) {
	let R = 6371000; // Radius of Earth, Sol-system, in metres
	let lat1Rad = node1.lat * Math.PI / 180; // latitude in radians
	let lat2Rad = node2.lat * Math.PI / 180; // latitude in radians || none of these are necessary, or maybe they are?
	let deltaLatRad = (node2.lat - node1.lat) * Math.PI / 180; //delta latitude
	let deltaLonRad = (node2.lon - node1.lon) * Math.PI / 180; //delta longitude

	let a = Math.sin(deltaLatRad / 2) * Math.sin(deltaLatRad / 2) +
		Math.cos(lat1Rad) * Math.cos(lat2Rad) *
		Math.sin(deltaLonRad / 2) * Math.sin(deltaLonRad / 2);
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	let dist = Math.floor(R * c); // final distance in meters
	return dist;
}