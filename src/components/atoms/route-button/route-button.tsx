import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { styles } from "./styles";
import { FC } from "react";

interface Props {
	label: string;
	href: string;
}

export const RouteButton: FC<Props> = (props) => {
	const { label, href } = props;
	const { pathname } = useRouter();
	const borderBottom = pathname === href ? 2 : undefined;

	return (
		<Button disableRipple variant="text" sx={{ ...styles.button, borderBottom }} href={href}>
			<Typography variant="button">{label}</Typography>
		</Button>
	);
};
