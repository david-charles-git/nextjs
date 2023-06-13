import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Who we are",
	description: "This is the who we are page"
};

const WhoWeAre: React.FC = () => {
	return (
		<main>
			<h1>WhoWeAre Page</h1>
		</main>
	);
};
export default WhoWeAre;
