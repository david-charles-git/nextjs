"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import HomeButton from "./ui/buttons/HomeButton";
import NavigationLink from "./ui/NavigationLink";
import ThemeBackground from "./ui/ThemeBackground";

const Navigation: React.FC = () => {
	const [navigationHeight_px, setNavigationHeight_px] = useState<number | "auto">("auto");
	const [windowScrollValue_px, setWindowScrollValue_px] = useState<number>(0);
	const navigationRef: React.MutableRefObject<any> = useRef(null);
	const navigationContent: JSX.Element = useMemo(() => {
		return (
			<nav ref={navigationRef} className="grid">
				<HomeButton />

				<ul className="grid">
					<li>
						<NavigationLink href="/what-we-do/">What we do</NavigationLink>
					</li>

					<li>
						<NavigationLink href="/who-we-are/">Who we are</NavigationLink>
					</li>

					<li>
						<NavigationLink href="/how-can-we-help/">How can we help?</NavigationLink>
					</li>
				</ul>

				{/* <NavigationBurger /> */}
			</nav>
		);
	}, []);

	useEffect(() => {
		const handlePeekabooNavHeightChangeOnScroll: () => void = () => {
			const initialScrollBuffer: number = 20;
			var newHeight_px: number = 0;

			if (window.scrollY >= document.getElementsByTagName("BODY")[0].clientHeight - window.innerHeight - initialScrollBuffer) {
				newHeight_px = 0;
			} else if (window.scrollY <= initialScrollBuffer || window.scrollY < windowScrollValue_px) {
				newHeight_px = navigationRef.current.clientHeight;
			}

			setNavigationHeight_px(newHeight_px);
			setWindowScrollValue_px(window.scrollY);
		};

		window.addEventListener("scroll", handlePeekabooNavHeightChangeOnScroll);

		return () => {
			window.removeEventListener("scroll", handlePeekabooNavHeightChangeOnScroll);
		};
	});

	return (
		<div className="Navigation">
			<ThemeBackground />

			<div
				style={{
					height: `${navigationHeight_px === "auto" ? "auto" : navigationHeight_px + "px"}`,
					overflow: "hidden",
					transition: "height 500ms ease-in-out"
				}}
			>
				{navigationContent}
			</div>
		</div>
	);
};

export default Navigation;
