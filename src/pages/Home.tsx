import Hero from "../components/home/Hero";
import Approach from "../components/home/Approach";
import SuccessStories from "../components/home/SuccessStories";
import Cta from "../components/home/Cta";

const Home = () => {
	return (
		<>
			<Hero />
			<SuccessStories />
			<Approach />
			<Cta />
		</>
	);
};

export default Home;
