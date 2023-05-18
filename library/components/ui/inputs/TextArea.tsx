"use client";

import { FormState } from "@/library/interfaces/Forms";
import { ForwardRefExoticComponent, RefAttributes, forwardRef, useState } from "react";

interface TextAreaProps {
	name: string;
	required: boolean;
	placeholder?: string;
	formState?: FormState;
}

const TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<unknown>> = forwardRef(({ name, required, placeholder, formState }, ref) => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<textarea
			ref={ref as any}
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
			disabled={formState === "loading" ? true : false}
		/>
	);
});
TextArea.displayName = "TextArea";

export default TextArea;
