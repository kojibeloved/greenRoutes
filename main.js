import {listOfNodes} from './nodes.js';
import {createGreenAdjacencyMatrix, createNonGreenAdjacencyMatrix} from "./createGreenAdjacencyMatrix.js";
import {createArrayOfCoordinatesFromShortestPath} from "./dijkstra.js";
import {drawImageMap} from "./graphics.js";

function greenRouting(startNode, endNode) {
	let greenAdjMatrix = createGreenAdjacencyMatrix(listOfNodes);
	let nonGreenAdjMatrix = createNonGreenAdjacencyMatrix(listOfNodes);
	// make green route
	let greenRoute = createArrayOfCoordinatesFromShortestPath(greenAdjMatrix, startNode, endNode);
	// make non green route (red) to compare with the difference of our algorithm
	let nonGreenRoute = createArrayOfCoordinatesFromShortestPath(nonGreenAdjMatrix, startNode, endNode);

	drawImageMap(greenRoute, nonGreenRoute, listOfNodes);
}

// Give start and end node.
// Currently our model has a total of 88 nodes and you simply call them by their index
greenRouting(6, 70);