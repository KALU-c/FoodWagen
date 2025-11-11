"use client"

import { useFeaturedMeals } from "@/hooks/useFeaturedMeals"
import { useFilterStore } from "@/stores/useFilterStore"
import MealCardSkeleton from "../skeleton/MealCardSkeleton"
import MealCard from "./MealCard"

const FeaturedMeals = () => {
	const { data: featuredMeals, isPending, error } = useFeaturedMeals()
	const { filteredMeals, isFiltering, filter } = useFilterStore()

	if (isPending || isFiltering) return <FeaturedMealsSkeleton />
	// TODO - handle error state
	if (error) return <p>error</p>

	const mealsToDisplay =
		filter.trim().length > 0 && filteredMeals.length > 0
			? filteredMeals
			: featuredMeals

	return (
		<section className="flex flex-col gap-[90px] items-center">
			<h2 className="text-[43px] font-bold">Featured Meals</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
				{mealsToDisplay.map(meal => (
					<MealCard key={meal.id} meal={meal} />
				))}
			</div>
		</section>
	)
}

const FeaturedMealsSkeleton = () => (
	<section className="flex flex-col gap-[90px] items-center">
		<h2 className="text-[43px] font-bold">Featured Meals</h2>

		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
			{Array.from({ length: 8 }).map((_, index) => (
				<MealCardSkeleton key={`featured-meals-skeleton-${index}`} />
			))}
		</div>
	</section>
)

export default FeaturedMeals
