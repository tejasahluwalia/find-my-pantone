const hexCharacters = "a-f\\d";
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");

const isValidHex = (value: string) => {
	return (
		typeof value == "string" &&
		!nonHexChars.test(value) &&
		validHexSize.test(value)
	);
};

export default isValidHex;
