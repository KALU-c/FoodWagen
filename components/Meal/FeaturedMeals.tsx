"use client"

import MealCardSkeleton from "@/components/skeleton/MealCardSkeleton"
import { Button } from "@/components/ui/button"
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import { useFeaturedMeals } from "@/hooks/useFeaturedMeals"
import { useFilterStore } from "@/stores/useFilterStore"
import { FolderOpen } from "lucide-react"
import { motion } from "motion/react"
import MealCard from "./MealCard"

const FeaturedMeals = () => {
	const { data: featuredMeals, isPending, error } = useFeaturedMeals()
	const { filteredMeals, isFiltering, filter } = useFilterStore()

	if (isPending || isFiltering) return <FeaturedMealsSkeleton />
	if (error) return <FeaturedMealError />

	const mealsToDisplay =
		filter.trim().length > 0 && filteredMeals
			? filteredMeals
			: featuredMeals

	if (filter.trim().length > 0 && mealsToDisplay?.length <= 0) return <FeaturedMealEmpty />

	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.4 }}
			id="featured-meals"
			className="flex flex-col gap-[90px] items-center"
		>
			<h2 className="text-[43px] font-bold">Featured Meals</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full container-desktop">
				{mealsToDisplay.map(meal => (
					<MealCard key={meal.id} meal={meal} />
				))}
			</div>
		</motion.section>
	)
}

const FeaturedMealsSkeleton = () => (
	<section
		id="featured-meals-skeleton"
		className="flex flex-col gap-[90px] items-center"
	>
		<h2 className="text-[43px] font-bold">Featured Meals</h2>

		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
			{Array.from({ length: 12 }).map((_, index) => (
				<MealCardSkeleton key={`featured-meals-skeleton-${index}`} />
			))}
		</div>
	</section>
)

const FeaturedMealError = () => (
	<Empty id="featured-meals">
		<EmptyHeader>
			<EmptyMedia variant="icon">
				<FolderOpen />
			</EmptyMedia>
			<EmptyTitle>Something Went Wrong</EmptyTitle>
			<EmptyDescription>
				We couldn&apos;t load meals right now. Please check your internet connection or try again later.
			</EmptyDescription>
		</EmptyHeader>
		<EmptyContent>
			<Button onClick={() => window.location.reload()}>
				Retry
			</Button>
		</EmptyContent>
	</Empty>
)

const FeaturedMealEmpty = () => (
	<Empty id="featured-meals">
		<EmptyHeader>
			<EmptyMedia variant="icon">
				<FolderOpen />
			</EmptyMedia>
			<EmptyTitle>No Meals Found</EmptyTitle>
			<EmptyDescription>
				We couldn&apos;t find any meals matching your search. Try adjusting your filter or browse all meals again.
			</EmptyDescription>
		</EmptyHeader>
		<EmptyContent>
			<Button onClick={() => window.location.reload()}>
				Reload Meals
			</Button>
		</EmptyContent>
	</Empty>
)

export default FeaturedMeals
