import getTiltWrapperSkew from "@/library/functions/getTiltWrapperSkew";
import getTiltWrapperRotation from "@/library/functions/getTiltWrapperRotation";

export interface TiltWrapperProps {
	className?: string;
	children: React.ReactNode;
	rotation?: number;
	skew?: number;
}

const TiltWrapper: ({ children, rotation, skew, className }: TiltWrapperProps) => JSX.Element = ({ children, rotation = 0, skew = 0, className = "" }) => {
	return (
		<div className="TiltWrapper">
			<span className={`Tilt ${className}`} style={{ transform: `rotate(${getTiltWrapperRotation(rotation)}deg) skew(${getTiltWrapperSkew(skew)}deg)` }} />

			{children}
		</div>
	);
};

export default TiltWrapper;
