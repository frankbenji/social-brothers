import "@/styles/globals.css";
import { AppLayout } from "@components/templates";
import { ReactQueryProvider } from "@features/react-query";
import { ThemeProvider } from "@features/ui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ReactQueryProvider>
			<ThemeProvider>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</ThemeProvider>
		</ReactQueryProvider>
	);
}
