import { ThemeName } from "@/contexts/Theme";

const blackPath: string = "/how-can-we-help*";
const redPath: string = "/marketing*";
const pinkPath: string = "/brand*";
const bluePath: string = "/technology*";

const getThemeNameFromPath: (path: string) => ThemeName = (path) => {
	if (new RegExp(blackPath).test(path)) {
		return "black";
	}

	if (new RegExp(redPath).test(path)) {
		return "red";
	}

	if (new RegExp(pinkPath).test(path)) {
		return "pink";
	}

	if (new RegExp(bluePath).test(path)) {
		return "blue";
	}

	return "yellow";
};

export { getThemeNameFromPath };
