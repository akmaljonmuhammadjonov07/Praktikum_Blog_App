export interface ChildProps {
	children: React.ReactNode;
}

export interface IArchivedBlog {
	year: string;
	blogs: IBlog[];
}

export interface IBlog {
	title: string;
	description: string;
	category: ICategoryAndTags;
	tag: ICategoryAndTags;
	author: IAuthor;
	image: {
		url: string;
	};
	createdAt: string;
	content: {
		html: string;
	};
	slug: string;
}

export interface IAuthor {
	name: string;
	id: string;
	bio: string;
	image: {
		url: string;
	};
	blogs: IBlog[];
}
export interface ICategoryAndTags {
	name: string;
	slug: string;
	blogs: IBlog[];
}
