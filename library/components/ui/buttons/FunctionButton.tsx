"use client";

import TiltWrapper from "../TiltWrapper";

interface FunctionButtonProps {
	children: React.ReactNode;
	buttonFunction: () => void;
}

const FunctionButton: React.FC<FunctionButtonProps> = ({ children, buttonFunction }) => {
	return (
		<div className={`Button function`}>
			<TiltWrapper className={"bclr-white"} rotation={4} skew={4}>
				<button
					className={"clr-white font-bold"}
					onClick={() => {
						buttonFunction();
					}}
				>
					{children}
				</button>
			</TiltWrapper>
		</div>
	);
};

export default FunctionButton;
