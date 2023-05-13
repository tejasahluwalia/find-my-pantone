import hexRgb from "./hexToRgb";
import rgbHex from "rgb-hex";
import diff from "color-diff";
import { pantonesTx } from "./pantoneMappings";
import isValidHex from "./validateHex";

type rgbObjectType = {
	R: number;
	G: number;
	B: number;
};

const get_rgbObject = (hexColor: string) => {
	let rgbcolor = hexRgb(hexColor);
	let rgbObject = {
		R: rgbcolor.red,
		G: rgbcolor.green,
		B: rgbcolor.blue,
	};
	return rgbObject as rgbObjectType;
};

const getNextClosestColor = (
	inputRGB: rgbObjectType,
	pallete: rgbObjectType[]
) => {
	const nearestPantone = diff.closest(inputRGB, pallete);
	pallete.splice(pallete.indexOf(nearestPantone), 1);
	const nearestPantoneHex = rgbHex(
		nearestPantone.R,
		nearestPantone.G,
		nearestPantone.B
	);
	const indexInPantonesList = pantonesTx.findIndex(
		(x) => x.hex == `#${nearestPantoneHex}`
	);
	const nearestPantoneObject = pantonesTx[indexInPantonesList];
	return nearestPantoneObject;
};

const getClosestColors = (inputHex: string, numberOfColors: number) => {
	let closestColors = [];
	let inputRgb = get_rgbObject(inputHex);
	const pallete = pantonesTx.map((color) => {
		return get_rgbObject(color.hex);
	});

	for (let i = 0; i < numberOfColors; i++) {
		const nearestPantoneObject = getNextClosestColor(inputRgb, pallete);
		closestColors.push(nearestPantoneObject);
	}

	return closestColors;
};

export default getClosestColors;
