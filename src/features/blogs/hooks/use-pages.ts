import { useQuery } from "react-query";
import { getPages } from "../api";

export const usePages = () => {
	return useQuery({ queryKey: ["PAGES"], queryFn: () => getPages() });
};
