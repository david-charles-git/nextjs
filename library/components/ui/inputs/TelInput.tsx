"use client";

import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface TelInputProps {
	name: string;
	required: boolean;
	placeholder?: string;
}

const TelInput: ForwardRefExoticComponent<TelInputProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<input
			type="tel"
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
TelInput.displayName = "TelInput";

export default TelInput;
