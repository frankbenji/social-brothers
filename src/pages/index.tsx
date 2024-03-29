import Head from "next/head";
import { MainLayout } from "@components/templates";
import { Form, RecentPosts } from "@features/blogs";

export default function Home() {
	return (
		<>
			<Head>
				<title>SocialBrothers</title>
				<meta name="description" content="SocialBrothers technical interview" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<Form />
				<RecentPosts />
			</MainLayout>
		</>
	);
}
