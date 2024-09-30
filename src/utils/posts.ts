import { TPost } from "../types";

export const getLatestPosts = (posts: TPost[], count: number = 5): TPost[] => {
	return [...posts]
    .filter(
        (post) =>
            post.categories &&
            Object.values(post.categories).some(
                (category) => category.name.toLowerCase() !== "trending"
            )
    )   
		.sort(
			(a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()
		)
		.slice(0, count);
};

export const getLatestTrendingPosts = (
	posts: TPost[],
	count: number = 3
): TPost[] => {
	return [...posts]
		.filter(
			(post) =>
				post.categories &&
				Object.values(post.categories).some(
					(category) => category.name.toLowerCase() === "trending"
				)
		)
		.sort(
			(a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()
		)
		.slice(0, count);
};
