import { Container, ContainerProps } from "@mui/material";
import { FC } from "react";
import { styles } from "./styles";

export const MainLayout: FC<ContainerProps> = ({ children }) => {
	return (
		<Container component="main" sx={styles.container}>
			{children}
		</Container>
	);
};
