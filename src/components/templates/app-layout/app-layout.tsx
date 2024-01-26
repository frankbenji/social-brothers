import { Footer, Header } from "@components/organisms";
import { Container, ContainerProps } from "@mui/material";
import { FC } from "react";
import { styles } from "./styles";

export const AppLayout: FC<ContainerProps> = ({ children }) => {
	return (
		<Container maxWidth={false} sx={styles.container}>
			<Header />
			{children}
			<Footer />
		</Container>
	);
};
