"use client";

import TiltWrapper from "./TiltWrapper";
import TelInput from "./inputs/TelInput";
import TextArea from "./inputs/TextArea";
import TextInput from "./inputs/TextInput";
import EmailInput from "./inputs/EmailInput";
import { useMemo, useRef, useState } from "react";
import SubmitButton from "./buttons/SubmitButton";
import { FormState } from "../../interfaces/Forms";

const ContactForm: React.FC = () => {
	const [formState, setFormState] = useState<FormState>("ready");
	const nameRef: React.MutableRefObject<any> = useRef(null);
	const emailRef: React.MutableRefObject<any> = useRef(null);
	const telRef: React.MutableRefObject<any> = useRef(null);
	const companyRef: React.MutableRefObject<any> = useRef(null);
	const commentRef: React.MutableRefObject<any> = useRef(null);
	const submitButton: JSX.Element = useMemo(() => {
		return <SubmitButton state={formState} />;
	}, [formState]);

	const validateContactFormInputs: () => boolean = () => {
		var validationPassed: boolean = true;

		if (!nameRef.current.value) {
			validationPassed = false;
		}

		if (!emailRef.current.value) {
			validationPassed = false;
		}

		if (!telRef.current.value) {
			validationPassed = false;
		}

		if (!companyRef.current.value) {
			validationPassed = false;
		}

		if (!commentRef.current.value) {
			validationPassed = false;
		}

		return validationPassed;
	};

	const handleContactFormSubmit: (event: any) => void = (event) => {
		event?.preventDefault();

		setFormState("loading");

		var validationPassed: boolean = validateContactFormInputs();

		if (!validationPassed) {
			setFormState("ready");

			return;
		}

		setFormState("error");
	};

	return (
		<div className={`Form contact ${formState}`}>
			{formState === "ready" || formState === "loading" ? (
				<form
					className="grid"
					onSubmit={(event) => {
						handleContactFormSubmit(event);
					}}
				>
					<TextInput ref={nameRef} name="name" required={true} placeholder="Full name*" formState={formState} />

					<EmailInput ref={emailRef} name="email" required={true} placeholder="Email*" formState={formState} />

					<TelInput ref={telRef} name="phone-number" required={true} placeholder="Phone*" formState={formState} />

					<TextInput ref={companyRef} name="company" required={true} placeholder="Company name*" formState={formState} />

					<TextArea
						ref={commentRef}
						name="comment"
						required={true}
						placeholder="Tell us about your buniness and what support you are looking for*"
						formState={formState}
					/>

					<div id="submit">{submitButton}</div>
				</form>
			) : (
				<></>
			)}

			{formState === "success" ? <div className="successMessage"></div> : <></>}

			{formState === "error" ? (
				<div className="errorMessage">
					<div className="grid">
						<h6 className="clr-white font-l">
							Helpful error message:{" "}
							<TiltWrapper className="bclr-yellow clr-black" rotation={2} skew={2}>
								something went wrong
							</TiltWrapper>
						</h6>

						<p className="clr-white font-s">
							Apparently, it’s all your fault (actually, it’s not).
							<br />
							<br />
							<span
								className="clr-yellow cursor-pointer"
								onClick={() => {
									setFormState("ready");
								}}
							>
								Please try again
							</span>{" "}
							and hopefully the connection will be better. And so will your day.
						</p>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ContactForm;
