const getRandomInteger: (min?: number, max?: number) => number = (min = 0, max = 100) => {
	if (max === 0) {
		return 0;
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default getRandomInteger;
