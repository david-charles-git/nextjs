"use client";

import { useLayoutEffect, useState } from "react";

interface SpacerProps {
	heights_px: {
		desktop: number;
		laptop: number;
		tablet: number;
		mobile: number;
	};
}

const Spacer: React.FC<SpacerProps> = ({ heights_px }) => {
	const [spacerHeight_px, setSpacerHeight_px] = useState<number>(heights_px.mobile);

	useLayoutEffect(() => {
		const handleSpacerResize: () => void = () => {
			setSpacerHeight_px(() => {
				if (window.innerWidth <= 680) {
					return heights_px.mobile;
				}

				if (window.innerWidth <= 1080) {
					return heights_px.tablet;
				}

				if (window.innerWidth <= 1480) {
					return heights_px.laptop;
				}

				return heights_px.desktop;
			});
		};

		handleSpacerResize();

		window.addEventListener("resize", handleSpacerResize);

		return () => {
			window.removeEventListener("resize", handleSpacerResize);
		};
	}, [heights_px]);

	return <div className="Spacer" style={{ height: `${spacerHeight_px}px` }}></div>;
};

export default Spacer;
