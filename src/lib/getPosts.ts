import { TPost } from "../types";

export type TPost_API = {
	found: number;
	posts: TPost[];
};
export const getPosts = async (): Promise<TPost_API> => {
	const res = await fetch(
		"https://public-api.wordpress.com/rest/v1.1/sites/menagainstrapefoundation.wordpress.com/posts"
	);
	const data = res.json();
	return data;
};


