import TiltWrapper from "@/library/components/ui/TiltWrapper";

const Home: React.FC = () => {
	return (
		<main>
			<TiltWrapper className="bclr-yellow" rotation={4} skew={4}>
				<h1>Home Page</h1>
			</TiltWrapper>
		</main>
	);
};
export default Home;
