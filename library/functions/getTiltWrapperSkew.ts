import getRandomInteger from "@/functions/getRandomInteger";

const getTiltWrapperSkew: (maxSkew: number) => number = (maxSkew = 0) => {
	return getRandomInteger(-1 * maxSkew, maxSkew) * Math.pow(-1, getRandomInteger(1, 2));
};

export default getTiltWrapperSkew;
