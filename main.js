import {listOfNodes} from './nodes.js';
import {createGreenAdjacencyMatrix, createNonGreenAdjacencyMatrix} from "./createGreenAdjacencyMatrix.js";
import {createArrayOfCoordinatesFromShortestPath} from "./dijkstra.js";
import {drawImageMap} from "./graphics.js";

function greenerRoutes(startNode, endNode) {
	let greenAdjMatrix = createGreenAdjacencyMatrix(listOfNodes);
	let nonGreenAdjMatrix = createNonGreenAdjacencyMatrix(listOfNodes);
	let greenRoute = createArrayOfCoordinatesFromShortestPath(greenAdjMatrix, startNode, endNode);
	let nonGreenRoute = createArrayOfCoordinatesFromShortestPath(nonGreenAdjMatrix, startNode, endNode);

	drawImageMap(greenRoute, nonGreenRoute, listOfNodes);
}

greenerRoutes(65, 14);