import getTiltWrapperRotation from "@/library/functions/getTiltWrapperRotation";
import getTiltWrapperSkew from "@/library/functions/getTiltWrapperSkew";
import { TiltWrapperProps } from "@/library/interfaces/TiltWrapper";

const TiltWrapper: ({ children, rotation, skew, className }: TiltWrapperProps) => JSX.Element = ({ children, rotation = 0, skew = 0, className = "" }) => {
	return (
		<div className="TiltWrapper">
			<span className={`Tilt ${className}`} style={{ transform: `rotate(${getTiltWrapperRotation(rotation)}deg) skew(${getTiltWrapperSkew(skew)}deg)` }} />

			{children}
		</div>
	);
};

export default TiltWrapper;
