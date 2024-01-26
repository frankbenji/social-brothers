import { useQuery } from "react-query";
import { getBlogs } from "../api";

export const useBlogs = (page: number = 1) => {
	return useQuery({ queryKey: ["blogs", page], queryFn: () => getBlogs({ page }) });
};
