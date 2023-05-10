import { Metadata } from "next";
//import "@/styles/globals.scss";

export const metadata: Metadata = {
	title: "What we do",
	description: "This is the What we do page"
};

const Layout: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};
export default Layout;
