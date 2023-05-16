"use client";

import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface TextInputProps {
	name: string;
	required: boolean;
	placeholder?: string;
}

const TextInput: ForwardRefExoticComponent<TextInputProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<input
			type="text"
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
TextInput.displayName = "TextInput";

export default TextInput;
