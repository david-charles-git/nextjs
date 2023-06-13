import Link from "next/link";
import TiltWrapper from "../TiltWrapper";

interface LinkButtonProps {
	children: React.ReactNode;
	href: string;
	className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, href, className }) => {
	return (
		<div className={`Button link ${className || ""}`}>
			<TiltWrapper className={"bclr-black"} rotation={4} skew={4}>
				<Link href={href}>{children}</Link>
			</TiltWrapper>
		</div>
	);
};

export default LinkButton;
