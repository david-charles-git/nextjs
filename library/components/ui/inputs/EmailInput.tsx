"use client";

import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface EmailInputProps {
	name: string;
	required: boolean;
	placeholder?: string;
}

const EmailInput: ForwardRefExoticComponent<EmailInputProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<input
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
		/>
	);
});
EmailInput.displayName = "EmailInput";

export default EmailInput;
