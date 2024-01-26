import { RouteButton } from "@components/atoms";
import { Stack, StackProps, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { styles } from "./styles";
import { ROUTES } from "./constants";
import { useRouter } from "next/router";

export const Header: FC<StackProps> = () => {
	const { pathname } = useRouter();
	const regex = /\//g;
	const title = pathname.replace(regex, "");

	return (
		<Stack component="header" sx={styles.header}>
			<Stack sx={styles.container}>
				<Image alt="logo" src="/images/svg/logo.svg" width={240} height={57} />
				<Stack sx={styles.links}>
					{ROUTES.map(({ label, href }) => (
						<RouteButton key={label} label={label} href={href} />
					))}
				</Stack>
			</Stack>
			{title && <Typography variant="h1">{title}</Typography>}
		</Stack>
	);
};
