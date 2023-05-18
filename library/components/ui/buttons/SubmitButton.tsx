import TiltWrapper from "../TiltWrapper";
import { FormState } from "@/library/interfaces/Forms";

interface SubmitButtonProps {
	state: FormState;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ state }) => {
	return (
		<div className={`Button submit ${state}`}>
			<TiltWrapper className={"bclr-yellow"} rotation={4} skew={4}>
				{state === "ready" ? (
					<input className="font-bold clr-black" type="submit" value="Submit" />
				) : (
					<div className="loading">
						<span />
						<span />
						<span />
					</div>
				)}
			</TiltWrapper>
		</div>
	);
};

export default SubmitButton;
