import { Toaster } from '@/components/ui/sonner';
import { ChildProps } from '@/types';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from './(root)/_components/provider/theme-provider';
import './globals.css';

const creteRound = localFont({
	src: './fonts/CreteRound-Regular.ttf',
	variable: '--font-creteRound',
	weight: '400',
});
const workSans = localFont({
	src: './fonts/WorkSans-VariableFont_wght.ttf',
	variable: '--font-workSans',
	weight: '500 600',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://blog.akmaldev.uz'),
	title: 'Sammi Dasturlashga oid maqolalar',
	description:
		"Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin",
	authors: [{ name: 'Akmaljon Muhammadjonov', url: 'https://akmaldev.uz' }],
	icons: { icon: '/aK.png' },
	keywords:
		"samar badriddinov, sammi, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, sammi, sammi academy, bepul dasturlash, rezyume yozish, portfolio, sammi javascript, sammi raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Blog dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://blog.akmaldev.uz',
		locale: 'en_EN',
		images:
			'/https://www.canva.com/design/DAGYMvUkjbw/hAGc7Dj8C54gt-qHcBDxXg/view?utm_content=DAGYMvUkjbw&utm_campaign=designshare&utm_medium=link&utm_source=editor',
		countryName: 'Uzbekistan',
		siteName: 'Blog',
		emails: 'info@akmaldev.uz',
	},
};

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader showSpinner={false} />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}
export default RootLayout;
