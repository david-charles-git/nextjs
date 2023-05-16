"use client";

import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface TextAreaProps {
	name: string;
	required: boolean;
	placeholder?: string;
}

const TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<textarea
			name={name}
			id={name}
			className={`${hasError ? "error" : ""}`}
			placeholder={`${placeholder || ""}`}
			value={value}
			required={required}
			onChange={(event) => {
				setHasError(false);
				setValue(event?.currentTarget?.value);
			}}
		/>
	);
});
TextArea.displayName = "TextArea";

export default TextArea;
