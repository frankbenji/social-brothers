import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta property="og:locale" content="nl_NL" />
				<meta property="og:type" content="website" />
				<meta name="author" content="Frank Benjamin" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
