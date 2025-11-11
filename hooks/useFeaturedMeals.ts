import { FeaturedMealType } from "@/types/featured-meals";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const getFeaturedMeals = async () => {
	try {
		const { data } = await axios.get<FeaturedMealType[]>('https://6852821e0594059b23cdd834.mockapi.io/Food');

		return data;
	} catch(error) {
		console.error(error);
		throw error;
	}
}

export const useFeaturedMeals = () => {
	return useQuery({
		queryKey: ['featured-meals'],
		queryFn: getFeaturedMeals,
		staleTime: 1000 * 60 * 5
	})
}