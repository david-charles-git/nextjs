"use client";

import Link from "next/link";
import TiltWrapper from "./TiltWrapper";
import { usePathname } from "next/navigation";
import { useThemeContext } from "../../contexts/Theme";
import { useLayoutEffect, useMemo, useState } from "react";

interface NavigationLinkProps {
	children: React.ReactNode;
	href: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ children, href }) => {
	const { name } = useThemeContext();
	const [isActivePage, setIsActivePage] = useState<boolean>(false);
	const pathName: string = usePathname();
	const buttonContent: JSX.Element = useMemo(() => {
		return (
			<TiltWrapper rotation={4} skew={4}>
				<Link className={""} href={href}>
					{children}
				</Link>
			</TiltWrapper>
		);
	}, [children, href]);

	useLayoutEffect(() => {
		const pageMatched: boolean = new RegExp(`${href}*`).test(pathName);

		setIsActivePage(pageMatched);
	}, [pathName, href]);

	return <div className={`Button navigationLink ${name} ${isActivePage ? "active" : ""}`}>{buttonContent}</div>;
};

export default NavigationLink;
