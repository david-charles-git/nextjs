import getRandomInteger from "@/functions/getRandomInteger";

const getTiltWrapperRotation: (maxRotation: number) => number = (maxRotation = 0) => {
	return getRandomInteger(-1 * maxRotation, maxRotation) * Math.pow(-1, getRandomInteger(1, 2));
};

export default getTiltWrapperRotation;
