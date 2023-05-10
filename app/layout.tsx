import { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "This is the home page"
};

const RootLayout: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;
