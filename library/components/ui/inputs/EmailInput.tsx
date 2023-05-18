"use client";

import { FormState } from "@/library/interfaces/Forms";
import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface EmailInputProps {
	name: string;
	required: boolean;
	placeholder?: string;
	formState?: FormState;
}

const EmailInput: ForwardRefExoticComponent<EmailInputProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder, formState }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<input
			ref={ref as any}
			type="email"
			name={name}
			id={name}
			className={`${hasError ? "error" : ""}`}
			placeholder={placeholder}
			value={value}
			required={required}
			onChange={(event) => {
				setHasError(false);
				setValue(event?.currentTarget?.value);
			}}
			disabled={formState === "loading" ? true : false}
		/>
	);
});
EmailInput.displayName = "EmailInput";

export default EmailInput;
