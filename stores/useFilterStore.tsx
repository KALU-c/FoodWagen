import { FeaturedMealType } from "@/types/featured-meals"
import axios from "axios"
import { create } from "zustand"

type FilterStore = {
	filter: string
	isFiltering: boolean
	filterMeals: () => void
	filteredMeals: FeaturedMealType[]
	setFilter: (filter: string) => void
}

export const useFilterStore = create<FilterStore>((set, get) => ({
	filter: "",
	isFiltering: false,
	setFilter: (filter: string) => {
		set({ filter })
	},
	filterMeals: async () => {
		const query = get().filter
		set({ isFiltering: true })
		try {
			const { data } = await axios.get(`https://6852821e0594059b23cdd834.mockapi.io/Food?name=${query}`)
			set({ filteredMeals: data })
		} catch (error) {
			console.error(error)
			set({ filteredMeals: [] })
		} finally {
			set({ isFiltering: false })
		}
	},
	filteredMeals: []
}))