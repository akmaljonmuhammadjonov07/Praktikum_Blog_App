import { IBlog } from '@/types';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DrawerClose } from '../ui/drawer';

function SearchCard(blog: IBlog) {
	return (
		<Link href={`/blogs/${blog.slug}`}>
			<DrawerClose className='flex flex-col space-y-2 text-start'>
				<Image
					width={200}
					height={200}
					src={blog.image.url}
					alt={blog.title}
					className='rounded-md shadow-xl dark:shadow-white/10'
				/>
				<div className='flex items-center gap-2'>
					<CalendarDays />
					<p className='text-sm'></p>
					{format(new Date(blog.createdAt), 'MMM dd, yyyy')}
				</div>
				<div className='font-creteRound'>{blog.title}</div>
			</DrawerClose>
		</Link>
	);
}

export default SearchCard;
