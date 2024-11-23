import { ICategoryAndTags } from '@/types';
import { Layers2, Tag } from 'lucide-react';
import Link from 'next/link';

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags';
}

const CategoriesTagsCard = (item: Props) => {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className='bg-secondary p-4 rounded-md shadow-xl flex flex-col items-center justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/5 space-y-2'
		>
			{item.type === 'tags' ? <Tag /> : <Layers2 />}
			<h1 className='text-xl font-createRound'>{item.name}</h1>
			<p>{item.blogs.length} blogs</p>
		</Link>
	);
};

export default CategoriesTagsCard;
