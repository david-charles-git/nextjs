import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Technology service page",
	description: "This is technology service page"
};

const Layout: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};
export default Layout;
