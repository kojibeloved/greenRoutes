/* --------- INITIALIZE CANVAS --------- */
/*const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/

/* --------- CREATES IMAGE MODEL --------- */
export function drawImageMap(greenRoute, nonGreenRoute, listOfNodes) {
	//only draws image if canvas is initialized
	if (ctx) {
		const mapImg = new Image();
		mapImg.src = './MapGraphicBackground.png';
		mapImg.onload = function () {
			//use drawImage method to draw the image onto the canvas
			ctx.drawImage(mapImg, 0, 0);
			mapGraphics(greenRoute, nonGreenRoute, listOfNodes);
		};
	}
}

export function createArrayOfPixelCoordinatesFromRoute(route, topLeftCorner, botRightCorner, pixelLon, pixelLat, imgPixelsY) {
	let routeInPixels = createEmptyArrayForPixels(route);
	for (let i = 0; i < route.length; i++) { //draw path
		let tempDeltaLon = route[i][1] - topLeftCorner[1]; //difference in longitude
		let tempDeltaLat = route[i][0] - botRightCorner[0]; //difference in latitude
		let nodePathCoX = Math.floor(tempDeltaLon * pixelLon); //new pixel coordinate
		let nodePathCoY = imgPixelsY - Math.floor(tempDeltaLat * pixelLat);
		routeInPixels[i][1] = nodePathCoX;
		routeInPixels[i][0] = nodePathCoY;
	}
	return routeInPixels;
}

/* --- CALCULATE PIXEL COORDINATES AND DRAW ROUTES ONTO MODEL --- */
function mapGraphics(greenRoute, nonGreenRoute, listOfNodes) {
	//
	let topLeftCorner = [55.697750, 12.535578];
	let topRightCorner = [55.697750, 12.552651];
	let botRightCorner = [55.688963, 12.552651];

	let deltaLon = topRightCorner[1] - topLeftCorner[1]; //longitude span
	let deltaLat = topRightCorner[0] - botRightCorner[0]; //latitude span

	//image dimensions
	const imgPixelsX = 796;
	const imgPixelsY = 720;

	let pixelLon = imgPixelsX / deltaLon; //pixels per degree of longitude
	let pixelLat = imgPixelsY / deltaLat; //pixels per degree of latitude

	//draw all nodes on map
	for (let i = 0; i < listOfNodes.length; i++) { //finds new coordinates for nodes in array
		let tempDeltaLon = listOfNodes[i].lon - topLeftCorner[1]; //difference in longitude
		let tempDeltaLat = listOfNodes[i].lat - botRightCorner[0]; //difference in latitude
		let pixelCoordinateX = Math.floor(tempDeltaLon * pixelLon); //new pixel coordinate
		let pixelCoordinateY = imgPixelsY - Math.floor(tempDeltaLat * pixelLat); //new pixel coordinate
		//ctx.fillStyle = "rgba(0, 200, 0, 0.8)";
		//ctx.fillRect((pixelCoordinateX - 3), (pixelCoordinateY - 3), 6, 6); //draw nodes
	}

	//from non green route to pixels
	let nonGreenRouteInPixels = createArrayOfPixelCoordinatesFromRoute(nonGreenRoute, topLeftCorner, botRightCorner, pixelLon, pixelLat, imgPixelsY);
	console.log("pixelNonGreenRoute:", nonGreenRouteInPixels);

	//from pixels to graphical line
	for (let i = 0; i < (nonGreenRouteInPixels.length - 1); i++) {
		let j = i + 1;
		//route outline (initialized as a background)
		/*ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.moveTo(nonGreenRouteInPixels[i][1], nonGreenRouteInPixels[i][0]);
		ctx.lineTo(nonGreenRouteInPixels[j][1], nonGreenRouteInPixels[j][0]);
		ctx.strokeStyle = "#0000FF";
		ctx.stroke();
		//route foreground
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.moveTo(nonGreenRouteInPixels[i][1], nonGreenRouteInPixels[i][0]);
		ctx.lineTo(nonGreenRouteInPixels[j][1], nonGreenRouteInPixels[j][0]);
		ctx.strokeStyle = "#FF0000";
		ctx.stroke();*/
	}

	//from green route to pixels
	let greenRouteInPixels = createArrayOfPixelCoordinatesFromRoute(greenRoute, topLeftCorner, botRightCorner, pixelLon, pixelLat, imgPixelsY);
	console.log("pixelGreenRoute:", greenRouteInPixels);

	//from pixels to graphical line
	for (let i = 0; i < (greenRouteInPixels.length - 1); i++) {
		let j = i + 1;
		//route outline (initialized as a background)
		/*ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.moveTo(greenRouteInPixels[i][1], greenRouteInPixels[i][0]);
		ctx.lineTo(greenRouteInPixels[j][1], greenRouteInPixels[j][0]);
		ctx.strokeStyle = "#0000FF";
		ctx.stroke();
		//route foreground
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.moveTo(greenRouteInPixels[i][1], greenRouteInPixels[i][0]);
		ctx.lineTo(greenRouteInPixels[j][1], greenRouteInPixels[j][0]);
		ctx.strokeStyle = "#00FF00";
		ctx.stroke();*/
	}
}

/* --------- ARRAY FOR PIXELS --------- */
function createEmptyArrayForPixels(inputArray) {
	let arrayForPixels = [];
	for(let i = 0; i < inputArray.length; i++) {
		let innerArray = [0, 0];
		arrayForPixels.push(innerArray);
	}
	return arrayForPixels;
}
