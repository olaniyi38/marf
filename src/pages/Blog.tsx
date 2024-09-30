import { useLoaderData } from "react-router-dom";
import PostsList from "../components/blog/PostsList";
import { getPosts } from "../lib/getPosts";
import { TPost } from "../types";
import Hero from "../components/blog/Hero";
import { useEffect } from "react";

export const loader = async () => {
	const res = await getPosts();
	const posts = res.posts;
	return posts;
};

const Blog = () => {
	const posts = useLoaderData() as TPost[];

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<section className="py-8 px-4 md:px-8 md:p-12 xl:px-20">
				<Hero posts={posts} />

				<PostsList posts={posts} />
			</section>
		</>
	);
};

export default Blog;
