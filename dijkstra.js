import {listOfNodes} from "./nodes.js";

function dijkstra(matrix, startNode, endNode) {
	let shortestPath = new Array(matrix.length).fill(null);
	let verticiesCompleted = new Array(matrix.length).fill(false);
	let distanceFromSource = new Array(matrix.length).fill(Infinity);
	shortestPath[startNode] = [startNode];
	distanceFromSource[startNode] = 0;

	while(verticiesCompleted.includes(false)){
		let indexU = findMinimumNonCompletedVertex(matrix, distanceFromSource, verticiesCompleted);
		let weights = matrix[indexU];
		verticiesCompleted[indexU] = true;
		if (endNode === indexU){
			break;
		}
		//relaxation
		for (let i = 0; i < weights.length; i++){
			if (!verticiesCompleted[i] && weights[i] != null){
				// Checking the connection between vertex indexU, i
				if (distanceFromSource[indexU] + weights[i] < distanceFromSource[i]){
					distanceFromSource[i] = distanceFromSource[indexU] + weights[i];
					let newpath = [...shortestPath[indexU]];
					newpath.push(i);
					shortestPath[i] = newpath;
				}
			}
		}
	}
	return shortestPath[endNode];
}

function findMinimumNonCompletedVertex(matrix, distanceFromsource, verticiesCompleted){
	let index = null;
	let value = Infinity;

	for (let i = 0; i < matrix.length; i++){
		if (!verticiesCompleted[i] && distanceFromsource[i] < value){
			value = distanceFromsource[i];
			index = i;
		}
	}
	return index;
}

export function createArrayOfCoordinatesFromShortestPath(matrix, startNode, endNode){
	let shortestPath = dijkstra(matrix, startNode, endNode);
	let shortestPathInCoordinates = [];
	for (let i = 0; i < shortestPath.length; i++) {
		let index = shortestPath[i];
		let node = listOfNodes[index];
		let nodeCoords = [node.lat, node.lon];
		shortestPathInCoordinates.push(nodeCoords);
	}
	return shortestPathInCoordinates;
}