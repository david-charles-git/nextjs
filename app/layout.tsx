import "@/styles/globals.scss";
import { Metadata } from "next";
import Footer from "@/library/components/Footer";
import { ThemeProvider } from "@/library/contexts/Theme";
import Navigation from "@/library/components/Navigation";
import ThemeBackground from "@/library/components/ui/ThemeBackground";

export const metadata: Metadata = {
	title: {
		default: "addmustard | Bright & Soho",
		template: "%s | addmustard"
	},
	description: "addmustard website description"
};

const RootLayout: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => {
	return (
		<html lang="en">
			<head />

			<ThemeProvider>
				<body>
					<Navigation />

					<ThemeBackground />

					{children}

					<Footer />
				</body>
			</ThemeProvider>
		</html>
	);
};
export default RootLayout;
