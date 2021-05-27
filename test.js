// 47 - 65
// 14 - 65
// 20 - 27
// 1 - 16
// 0 - 13
//import {greenRouting} from './main.js';
import {listOfNodes} from './nodes.js';
import {createGreenAdjacencyMatrix, createNonGreenAdjacencyMatrix} from "./createGreenAdjacencyMatrix.js";
import {createArrayOfCoordinatesFromShortestPath} from "./dijkstra.js";
import {createArrayOfPixelCoordinatesFromRoute} from "./graphicsTest.js";

//const createArrayOfCoordinatesFromShortestPath = require('./main.js')

/*test('find shortest green path', () => {
    expect(main(14, 65)).toStrictEqual()
})

test('find shortest path', () => {
    expect(findShortestPath(graph, "G1", "G6")).toStrictEqual({ distance: 216, path: [ 'G1', 'G2', 'G6' ] })
})*/

let expectedGreen1x16 = [
    [55.697672, 12.54378],
    [55.697532, 12.543144],
    [55.69735, 12.541438],
    [55.696816, 12.541414],
    [55.696558, 12.540916],
    [55.695964, 12.540882],
    [55.694941, 12.540951],
    [55.694697, 12.541005],
    [55.693987, 12.541213],
    [55.693418, 12.541492],
    [55.693319, 12.541683],
    [55.693206, 12.541924],
    [55.692836, 12.541907],
    [55.691044, 12.543016],
    [55.690898, 12.543239],
    [55.690184, 12.54355],
    [55.690046, 12.543856],
    [55.689812, 12.543653],
    [55.689021, 12.542759]
];
let expectedGreen20x27 = [
    [55.69116, 12.538906],
    [55.690925, 12.539275],
    [55.692382, 12.54072],
    [55.693174, 12.541532],
    [55.693319, 12.541683],
    [55.693418, 12.541492],
    [55.693987, 12.541213],
    [55.694697, 12.541005],
    [55.694941, 12.540951],
    [55.695964, 12.540882],
    [55.695977, 12.540627],
    [55.697263, 12.540782]
];
let expectedGreen0x13 = [
    [55.697532, 12.543144],
    [55.69735, 12.541438],
    [55.696816, 12.541414],
    [55.696558, 12.540916],
    [55.695964, 12.540882],
    [55.694941, 12.540951],
    [55.694697, 12.541005],
    [55.693987, 12.541213],
    [55.693418, 12.541492],
    [55.693319, 12.541683],
    [55.693206, 12.541924],
    [55.693044, 12.542531],
    [55.691145, 12.545176]
];
let expectedNonGreen0x13 = [
    [55.697532, 12.543144],
    [55.696986, 12.543118],
    [55.696376, 12.543075],
    [55.69514, 12.543181],
    [55.695043, 12.543389],
    [55.69486, 12.543206],
    [55.694368, 12.542718],
    [55.693903, 12.54226],
    [55.693511, 12.541885],
    [55.693044, 12.542531],
    [55.691145, 12.545176]
];
let expectedPixelsNonGreen0x13 = [
    [18, 352],
    [63, 351],
    [113, 349],
    [214, 354],
    [222, 364],
    [237, 355],
    [278, 332],
    [316, 311],
    [348, 294],
    [386, 324],
    [542, 447]
];
let expectedPixelsGreen0x13 = [
    [18, 352],
    [33, 273],
    [77, 272],
    [98, 248],
    [147, 247],
    [231, 250],
    [251, 253],
    [309, 262],
    [355, 275],
    [364, 284],
    [373, 295],
    [386, 324],
    [542, 447]
];

export function nonGreenTest(listOfNodes, start, end, successfulTests, expected) {
    let matrix = createNonGreenAdjacencyMatrix(listOfNodes);

    if(JSON.stringify(createArrayOfCoordinatesFromShortestPath(matrix, start, end)) === JSON.stringify(expected)) {
        //console.log(createArrayOfCoordinatesFromShortestPath(matrix, start, end));
        console.log("nonGreenTest is successful.");
        successfulTests++;
        return successfulTests;
    } else {
        console.log("nonGreenTest has failed.");
        return successfulTests;
    }
};

function greenTest(listOfNodes, start, end, successfulTests, expected) {
    let matrix = createGreenAdjacencyMatrix(listOfNodes);

    if(JSON.stringify(createArrayOfCoordinatesFromShortestPath(matrix, start, end)) === JSON.stringify(expected)) {
        //console.log(createArrayOfCoordinatesFromShortestPath(matrix, start, end));
        console.log("GreenTest is successful.");
        successfulTests++;
        return successfulTests;
    } else {
        console.log("GreenTest has failed.");
        return successfulTests;
    };
};

function pixelGreenTest(listOfNodes, start, end, successfulTests, expected) {
    let matrix = createGreenAdjacencyMatrix(listOfNodes);
    let route = createArrayOfCoordinatesFromShortestPath(matrix, start, end);
    let topLeftCorner = [55.697750, 12.535578];
    let topRightCorner = [55.697750, 12.552651];
    let botRightCorner = [55.688963, 12.552651];
    const imgPixelsX = 796;
    const imgPixelsY = 720;
    let deltaLon = topRightCorner[1] - topLeftCorner[1];
    let deltaLat = topRightCorner[0] - botRightCorner[0];
    let pixelLon = imgPixelsX / deltaLon;
    let pixelLat = imgPixelsY / deltaLat;

    if(JSON.stringify(createArrayOfPixelCoordinatesFromRoute(route, topLeftCorner, botRightCorner, pixelLon, pixelLat, imgPixelsY)) === JSON.stringify(expected)) {
        //console.log(createArrayOfCoordinatesFromShortestPath(matrix, start, end));
        console.log("PixelGreenTest is successful.");
        successfulTests++;
        return successfulTests;
    } else {
        console.log("PixelGreenTest has failed.");
        return successfulTests;
    };
};

function pixelNonGreenTest(listOfNodes, start, end, successfulTests, expected) {
    let matrix = createNonGreenAdjacencyMatrix(listOfNodes);
    let route = createArrayOfCoordinatesFromShortestPath(matrix, start, end);
    let topLeftCorner = [55.697750, 12.535578];
    let topRightCorner = [55.697750, 12.552651];
    let botRightCorner = [55.688963, 12.552651];
    const imgPixelsX = 796;
    const imgPixelsY = 720;
    let deltaLon = topRightCorner[1] - topLeftCorner[1];
    let deltaLat = topRightCorner[0] - botRightCorner[0];
    let pixelLon = imgPixelsX / deltaLon;
    let pixelLat = imgPixelsY / deltaLat;

    if(JSON.stringify(createArrayOfPixelCoordinatesFromRoute(route, topLeftCorner, botRightCorner, pixelLon, pixelLat, imgPixelsY)) === JSON.stringify(expected)) {
        //console.log(createArrayOfCoordinatesFromShortestPath(matrix, start, end));
        console.log("PixelNonGreenTest is successful.");
        successfulTests++;
        return successfulTests;
    } else {
        console.log("PixelNonGreenTest has failed.");
        return successfulTests;
    };
};

function testSuite() {
    // SETUP
    let numberOfTests = 6;
    let successfulTests = 0;
    // TESTSUITE
    successfulTests = (greenTest(listOfNodes, 1, 16, successfulTests, expectedGreen1x16));
    successfulTests = (greenTest(listOfNodes, 20, 27, successfulTests, expectedGreen20x27));
    successfulTests = (greenTest(listOfNodes, 0, 13, successfulTests, expectedGreen0x13));
    successfulTests = (nonGreenTest(listOfNodes, 0, 13, successfulTests, expectedNonGreen0x13));
    successfulTests = (pixelGreenTest(listOfNodes, 0, 13, successfulTests, expectedPixelsGreen0x13));
    successfulTests = (pixelNonGreenTest(listOfNodes, 0, 13, successfulTests, expectedPixelsNonGreen0x13));
    // USER FEEDBACK
    if(successfulTests === numberOfTests) {
        console.log("All", successfulTests, "tests are successful!");
    } else if(successfulTests === 0) {
        console.log("All", numberOfTests, "tests have failed!");
    } else {
        console.log(successfulTests, "successful test(s).");
        console.log((numberOfTests - successfulTests), "test(s) failed.");
    };
};

testSuite();
