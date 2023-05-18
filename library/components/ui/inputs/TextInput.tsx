"use client";

import { FormState } from "@/library/interfaces/Forms";
import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface TextInputProps {
	name: string;
	required: boolean;
	placeholder?: string;
	formState?: FormState;
}

const TextInput: ForwardRefExoticComponent<TextInputProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder, formState }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<input
			ref={ref as any}
			type="text"
			name={name || ""}
			id={name || ""}
			className={`${hasError ? "error" : ""}`}
			placeholder={placeholder || ""}
			value={value}
			required={required || false}
			onChange={(event) => {
				setHasError(false);
				setValue(event?.currentTarget?.value);
			}}
			disabled={formState === "loading" ? true : false}
		/>
	);
});
TextInput.displayName = "TextInput";

export default TextInput;
