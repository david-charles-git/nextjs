interface ElementCoordinates {
	top_px: number;
	left_px: number;
	bottom_px: number;
	right_px: number;
}

export const getElementCoordinates: (element: HTMLElement) => ElementCoordinates = (element) => {
	const elementTop: number = window.scrollY + element.getBoundingClientRect().top;
	const elementBottom: number = elementTop + element.clientHeight;
	const elementLeft: number = window.scrollX + element.getBoundingClientRect().left;
	const elementRight: number = elementLeft + element.clientWidth;
	const elementCoordinates: ElementCoordinates = {
		top_px: elementTop,
		left_px: elementLeft,
		bottom_px: elementBottom,
		right_px: elementRight
	};

	return elementCoordinates;
};

export const scrollToElement: (element: any, buffer_px?: number) => void = (element, buffer_px = 0) => {
	const elementCoordinates: ElementCoordinates = getElementCoordinates(element);

	window.scrollTo({
		top: elementCoordinates.top_px - buffer_px,
		left: 0,
		behavior: "smooth"
	});

	return;
};
