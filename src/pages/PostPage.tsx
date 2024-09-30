import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getPost } from "../lib/getPost";
import { TPost } from "../types";
import parse from "html-react-parser";
import { useEffect } from "react";

export const loader: LoaderFunction = async ({ params }) => {
	const post = await getPost(params.postId ? params.postId : "");
	return post;
};

const PostPage = () => {
	console.log(useLoaderData());
	const { content, title, author, date: dateString } = useLoaderData() as TPost;
	const date = new Date(dateString).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<section className="max-w-[50rem] mx-auto py-8 md:py-12 px-6 md:px-8">
				<div>
					<h1 className="font-bold text-xl md:text-2xl">{title}</h1>
					<p className="text-gray-500  text-[.8rem] sm:text-[.9rem] pt-1">
						by <span>{author?.name}</span> | <span>{date}</span> |{" "}
						<span>NEWS</span>
					</p>
				</div>
				<div className="blog-content pt-8 text-gray-800 text-[.9rem] lg:text-base">
					{parse(content)}
				</div>
			</section>
		</>
	);
};

export default PostPage;
