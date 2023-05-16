"use client";

import { useThemeContext } from "@/contexts/Theme";

const ThemeBackground: React.FC = () => {
	const { name } = useThemeContext();

	return <div className={`ThemeBackground background bclr-${name}`} />;
};

export default ThemeBackground;
