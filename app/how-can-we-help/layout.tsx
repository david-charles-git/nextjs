import { Metadata } from "next";
//import "@/styles/globals.scss";

export const metadata: Metadata = {
	title: "How can we help",
	description: "This is the How can we help page"
};

const Layout: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};
export default Layout;
