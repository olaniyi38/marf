import Hero from "./Hero";
import Approach from "./Approach";
import Stats from "./Stats";
import SuccessStories from "./SuccessStories";
import Cta from "./Cta";

const Home = () => {
	return (
		<main>
			<Hero />
			<SuccessStories />
			<Stats />
			<Approach />
			<Cta />
		</main>
	);
};

export default Home;
