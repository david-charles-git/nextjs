"use client";

import { useMemo, useRef, useState } from "react";
import SubmitButton from "./ui/buttons/SubmitButton";
import { FormState } from "../interfaces/Forms";
import TelInput from "./ui/inputs/TelInput";
import EmailInput from "./ui/inputs/EmailInput";
import TextInput from "./ui/inputs/TextInput";
import TextArea from "./ui/inputs/TextArea";

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

	const handleContactFormSubmit: (event: any) => void = (event) => {
		event?.preventDefault();

		setFormState("loading");

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

		if (!validationPassed) {
			setFormState("ready");

			return;
		}

		setFormState("success");
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
					<TextInput ref={nameRef} name="name" required={true} placeholder="Full name*" />

					<EmailInput ref={emailRef} name="email" required={true} placeholder="Email*" />

					<TelInput ref={telRef} name="phone-number" required={true} placeholder="Phone*" />

					<TextInput ref={companyRef} name="company" required={true} placeholder="Company name*" />

					<TextArea ref={commentRef} name="comment" required={true} placeholder="Tell us about your buniness and what support you are looking for*" />

					<div id="submit">{submitButton}</div>
				</form>
			) : (
				<></>
			)}

			{formState === "success" ? <div className="successMessage"></div> : <></>}

			{formState === "error" ? <div className="errorMessage"></div> : <></>}
		</div>
	);
};

export default ContactForm;
