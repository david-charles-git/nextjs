import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Marketing",
	description: "This is the Marketing page"
};

const Marketing: React.FC = () => {
	return (
		<main>
			<h1>Marketing Page</h1>
		</main>
	);
};
export default Marketing;
