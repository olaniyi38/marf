type TAuthor = {
	ID: number;
	login: string;
	email: boolean;
	name: string;
	first_name: string;
	last_name: string;
	nice_name: string;
	URL: string;
	avatar_URL: string;
	profile_URL: string;
	site_ID: number;
};

type TDiscussion = {
	comments_open: boolean;
	comment_status: string;
	pings_open: boolean;
	ping_status: string;
	comment_count: number;
};

type TCategory = {
	ID: number;
	name: string;
	slug: string;
	description: string;
	post_count: number;
	parent: number;
	meta: {
		links: {
			self: string;
			help: string;
			site: string;
		};
	};
};

type TTerms = {
	category: Record<string, TCategory>;
	post_tag: Record<string, unknown>;
	post_format: Record<string, unknown>;
	mentions: Record<string, unknown>;
};

type TMetaLinks = {
	self: string;
	help: string;
	site: string;
	replies: string;
	likes: string;
};

type TCapabilities = {
	publish_post: boolean;
	delete_post: boolean;
	edit_post: boolean;
};

type TPostThumbnail = {
	ID: number;
	URL: string;
	guid: string;
	mime_type: string;
	width: number;
	height: number;
};

export type TPost = {
	ID: number;
	site_ID: number;
	author: TAuthor;
	date: string;
	modified: string;
	title: string;
	URL: string;
	short_URL: string;
	content: string;
	excerpt: string;
	slug: string;
	guid: string;
	status: string;
	sticky: boolean;
	password: string;
	parent: boolean;
	type: string;
	discussion: TDiscussion;
	likes_enabled: boolean;
	sharing_enabled: boolean;
	like_count: number;
	i_like: boolean;
	is_reblogged: boolean;
	is_following: boolean;
	global_ID: string;
	featured_image: string;
	post_thumbnail: TPostThumbnail; // Updated here
	format: string;
	geo: boolean;
	menu_order: number;
	page_template: string;
	publicize_URLs: string[];
	terms: TTerms;
	tags: Record<string, unknown>;
	attachments: Record<string, unknown>;
	attachment_count: number;
	metadata: {
		id: string;
		key: string;
		value: string;
	}[];
	meta: {
		links: TMetaLinks;
	};
	capabilities: TCapabilities;
	other_URLs: Record<string, unknown>;
};
