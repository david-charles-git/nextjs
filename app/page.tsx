import TiltWrapper from "@/ui/TiltWrapper";

const Home: React.FC = () => {
	return (
		<main className="Home">
			<TiltWrapper className="bclr-black" rotation={4} skew={4}>
				<h1>Home Page</h1>
			</TiltWrapper>
		</main>
	);
};

export default Home;
