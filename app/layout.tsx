import { Toaster } from '@/components/ui/sonner';
import { ChildProps } from '@/types';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
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
	title: 'Sammi Dasturlashga oid maqolalar',
	description:
		"Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin",
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
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}
export default RootLayout;
