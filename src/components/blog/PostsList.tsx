import { TPost } from "../../types";
import { getLatestFeaturedPosts } from "../../utils/posts";
import Post from "./Post";
import { useState } from "react";
type Props = {
	posts: TPost[];
};

const PostsList = ({ posts }: Props) => {
	const latestFeaturedPosts = getLatestFeaturedPosts(posts);
	const featuredPostsIDs = latestFeaturedPosts.slice(0, 4).map((p) => p.ID);

	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const currentPosts = posts
		.slice(indexOfFirstPost, indexOfLastPost)
		.filter((post) => !featuredPostsIDs.includes(post.ID));

	const totalPages = Math.ceil(posts.length / postsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	return (
		<section className="py-8 pt-16 md:pt-20 flex flex-col gap-y-16 border-t border-t-gray-200">
			<div className=" grid grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] gap-y-16 gap-x-10">
				{currentPosts.map((p) => (
					<>
						<Post
							data={p}
							key={p.ID}
						/>
					</>
				))}
			</div>
			<div className=" self-end flex items-center gap-x-2 text-sm">
				<button
					className="text-brick-red underline disabled:text-gray-600"
					onClick={handlePrevPage}
					disabled={currentPage === 1}>
					Prev
				</button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<button
					className="text-brick-red underline disabled:text-gray-600"
					onClick={handleNextPage}
					disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</section>
	);
};

export default PostsList;
