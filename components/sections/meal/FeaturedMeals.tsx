"use client"

import { useFeaturedMeals } from "@/hooks/useFeaturedMeals"
import MealCard from "./MealCard"

const FeaturedMeals = () => {
	const { data: featuredMeals, isPending, error } = useFeaturedMeals()

	if(isPending) return <p>loading...</p>
	if(error) return <p>error</p>

	return (
		<section className="flex flex-col gap-[90px] items-center">
			<h2 className="text-[43px] font-bold">Featured Meals</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{featuredMeals.map(meal => (
					<MealCard key={meal.id} {...meal} />
				))}
			</div>
		</section>
	)
}

export default FeaturedMeals
