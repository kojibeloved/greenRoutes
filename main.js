import {listOfNodes} from './nodes.js';
import {createAdjacencyMatrix, createNonGreenAdjacencyMatrix} from "./createAdjacencyMatrix.js";
import {createArrayOfCoordinatesFromShortestPath} from "./dijkstra.js";
import {drawImageMap} from "./graphics.js";

function greenerRoutes(startNode, endNode) {
	let adjMatrix = createAdjacencyMatrix(listOfNodes);
	let nonGreenAdjMatrix = createNonGreenAdjacencyMatrix(listOfNodes);
	let greenRoute = createArrayOfCoordinatesFromShortestPath(adjMatrix, startNode, endNode);
	let nonGreenRoute = createArrayOfCoordinatesFromShortestPath(nonGreenAdjMatrix, startNode, endNode);

	drawImageMap(greenRoute, nonGreenRoute, listOfNodes);
}

greenerRoutes(65, 14);