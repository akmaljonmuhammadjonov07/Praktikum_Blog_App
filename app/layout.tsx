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
	title: 'Akmaldev Dasturlashga oid maqolalar',
	description:
		"Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin",
	authors: [{ name: 'Akmaljon Muhammadjonov', url: 'https://akmaldev.uz' }],
	icons: { icon: '/favicon.png' },
	keywords:
		"akmaljon muhammadjonov, akmaldev, dasturlash haqida, dasturlashga oid bloglar, reactjs uzbek tilida, redux uzbek tilida, sammi, rezyume, portfolio, raqamli avlod, javascript, reactjs, o'zbek tilida dasturlash, reactjs o'zbek tilida,  javascript darslari, javascript loyihalar o'zbek tilida,frontend loyihalar o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Blog dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://blog.akmaldev.uz',
		locale: 'en_EN',
		images:
			'https://blog.akmaldev.uz/_next/image?url=https%3A%2F%2Fus-west-2.graphassets.com%2Fcm3qooap50d2407k649bxflq5%2Fcm3u08x6ghgt807n0xv8w4vvd&w=1920&q=75',
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
