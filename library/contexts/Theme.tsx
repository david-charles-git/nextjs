"use client";

import { usePathname } from "next/navigation";
import { getThemeNameFromPath } from "@/functions/getThemeNameFromPath";
import { Dispatch, SetStateAction, createContext, useContext, useLayoutEffect, useState } from "react";

export type ThemeName = "black" | "red" | "pink" | "blue" | "yellow";

interface ThemeContextProps {
	name: ThemeName;
	setName: Dispatch<SetStateAction<ThemeName>>;
}

const ThemeContext = createContext<ThemeContextProps>({
	name: "yellow",
	setName: (): ThemeName => "yellow"
});

export const ThemeProvider: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => {
	const [name, setName] = useState<ThemeName>("yellow");
	const pathName: string = usePathname();

	useLayoutEffect(() => {
		const themeName: ThemeName = getThemeNameFromPath(pathName);

		setName(themeName);

		return () => {};
	}, [pathName, name]);

	return <ThemeContext.Provider value={{ name, setName }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext: () => ThemeContextProps = () => {
	return useContext(ThemeContext);
};
