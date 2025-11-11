import MealCard from "./MealCard"

const FeaturedMeals = () => {
	return (
		<section className="flex flex-col gap-[90px] items-center">
			<h2 className="text-[43px] font-bold">Featured Meals</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<MealCard />
				<MealCard />
				<MealCard />
				<MealCard />
			</div>
		</section>
	)
}

export default FeaturedMeals
