import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

import { Inter } from "next/font/google";
import TopBar from "@/components/shared/TopBar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/BottomBar";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Threads",
	description: "A Next.js 13 Meta Threads Copy using MERN",
	author: "ikigami-sama",
	themeColor: "black",
	openGraph: {
		title: "Threads Clone App",
		description: "A Next.js 13 Meta Threads Copy using MERN",
		url: "https://next-thread-clone.vercel.app",
		images: ["https://next-thread-clone.vercel.app/img/main-banner.png"],
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}>
			<html lang='en'>
				<body className={inter.className}>
					<TopBar />
					<main className='flex flex-row'>
						<LeftSidebar />
						<section className='main-container'>
							<div className='w-full max-w-4xl'>{children}</div>
						</section>

						<RightSidebar />
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
