const canvas = document.querySelector('canvas'); //setup canvas
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; // = picPixX
canvas.height = window.innerHeight; // = picPixY

function copyArrayEmpty(inputArray) { //makes a [0, 0]-filled copy of the input array
	let emptyArrayCopy = []; // creates truly empty array
	for(let z = 0; z < inputArray.length; z++) { //fill empty array indexes with other array [0, 0]
		let arrayPiece = [0, 0];
		emptyArrayCopy.push(arrayPiece);
	}
	return emptyArrayCopy;
}

function mapGraphics(pathArray, pathNonGreen, listOfNodes) { //draw map with nodes and path - (coArray, pathArray)
	let topLeftCor = [55.697750, 12.535578]; // MapPic-corners
	let topRightCor = [55.697750, 12.552651]; // longitude = x, latitude = y
	let botRightCor = [55.688963, 12.552651]; //These co's are soo not accurate #lazy

	let deltaLon = topRightCor[1] - topLeftCor[1]; //longitude span
	let deltaLat = topRightCor[0] - botRightCor[0]; //latitude span

	const picPixX = 796; //Background map-picture dimensions i pixels
	const picPixY = 720; //Background map-picture dimensions i pixels

	let pixLon = picPixX / deltaLon; //pixels per degree of longitude
	let pixLat = picPixY / deltaLat; //pixels per degree of latitude

	let pixelPathArray = copyArrayEmpty(pathArray); //creates a [0, 0]-filled copy of the input array
	let pixelPathNonGreen = copyArrayEmpty(pathNonGreen);
	let pixelCoArray = copyArrayEmpty(listOfNodes); //creates a [0, 0]-filled copy of the input array

	for (let i = 0; i < listOfNodes.length; i++) { //finds new coordinates for nodes in array
		let tempDeltaLon = listOfNodes[i].lon - topLeftCor[1]; //difference in longitude
		let tempDeltaLat = listOfNodes[i].lat - botRightCor[0]; //difference in latitude
		let nodeNewCoX = Math.floor(tempDeltaLon * pixLon); //new pixel coordinate
		let nodeNewCoY = picPixY - Math.floor(tempDeltaLat * pixLat); //new pixel coordinate
		pixelCoArray[i][1] = nodeNewCoX;
		pixelCoArray[i][0] = nodeNewCoY;
		ctx.fillStyle = "rgba(0, 200, 0, 0.8)";
		ctx.fillRect((pixelCoArray[i][1] - 3), (pixelCoArray[i][0] - 3), 6, 6); //draw nodes
	}
	for (let l = 0; l < (pathNonGreen.length); l++) { //draw path
		let tempDeltaLon = pathNonGreen[l][1] - topLeftCor[1]; //difference in longitude
		let tempDeltaLat = pathNonGreen[l][0] - botRightCor[0]; //difference in latitude
		let nodePathCoX = Math.floor(tempDeltaLon * pixLon); //new pixel coordinate
		let nodePathCoY = picPixY - Math.floor(tempDeltaLat * pixLat);
		pixelPathNonGreen[l][1] = nodePathCoX;
		pixelPathNonGreen[l][0] = nodePathCoY;
	}

	for (let j = 0; j < (pixelPathNonGreen.length - 1); j++) {
		let k = j + 1;
		ctx.beginPath();
		ctx.lineWidth = 4; //thiccness of line
		ctx.moveTo(pixelPathNonGreen[j][1], pixelPathNonGreen[j][0]);
		ctx.lineTo(pixelPathNonGreen[k][1], pixelPathNonGreen[k][0]);
		ctx.strokeStyle = "#0000FF";
		ctx.stroke();

		ctx.beginPath();
		ctx.lineWidth = 3; //thiccness of line
		ctx.moveTo(pixelPathNonGreen[j][1], pixelPathNonGreen[j][0]);
		ctx.lineTo(pixelPathNonGreen[k][1], pixelPathNonGreen[k][0]);
		ctx.strokeStyle = "#FF0000";
		ctx.stroke();
	}
	for (let l = 0; l < (pathArray.length); l++) { //draw path
		let tempDeltaLon = pathArray[l][1] - topLeftCor[1]; //difference in longitude
		let tempDeltaLat = pathArray[l][0] - botRightCor[0]; //difference in latitude
		let nodePathCoX = Math.floor(tempDeltaLon * pixLon); //new pixel coordinate
		let nodePathCoY = picPixY - Math.floor(tempDeltaLat * pixLat);
		pixelPathArray[l][1] = nodePathCoX;
		pixelPathArray[l][0] = nodePathCoY;
	}
	for (let j = 0; j < (pixelPathArray.length - 1); j++) {
		let k = j + 1;
		ctx.beginPath();
		ctx.lineWidth = 4; //thiccness of line
		ctx.moveTo(pixelPathArray[j][1], pixelPathArray[j][0]);
		ctx.lineTo(pixelPathArray[k][1], pixelPathArray[k][0]);
		ctx.strokeStyle = "#0000FF";
		ctx.stroke();

		ctx.beginPath();
		ctx.lineWidth = 3; //thiccness of line
		ctx.moveTo(pixelPathArray[j][1], pixelPathArray[j][0]);
		ctx.lineTo(pixelPathArray[k][1], pixelPathArray[k][0]);
		ctx.strokeStyle = "#00FF00";
		ctx.stroke();
	}
}

export function drawImageMap(path, nonGreen, co) {
	if (ctx) {
		const mapImg = new Image(); //Loading of the image - mapImg
		mapImg.src = './MapGraphicBackgroundIII.png'; // image location
		mapImg.onload = function () {  //drawing of the image - mapImg
			ctx.drawImage(mapImg, 0, 0); //draw background image
			mapGraphics(path, nonGreen, co); //draw graphics over the img
		};
	}
}