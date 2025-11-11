"use client"

import { Bag } from "@/components/icons/Bag"
import { Bike } from "@/components/icons/Bike"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardHeader
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useFilterStore } from "@/stores/useFilterStore"
import { Search } from "lucide-react"
import Image from "next/image"

const Hero = () => {
	const { filter, setFilter, filterMeals, isFiltering } = useFilterStore()

	const handleClick = async () => {
		if (filter.length <= 0) return

		await filterMeals()
		const section = document.getElementById("featured-meals")
		section?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<section className="h-[628px] container-desktop bg-primary flex gap-28 overflow-hidden">
			<div className="flex flex-1 flex-col gap-8 justify-center">
				{/* title + short short description */}
				<div className="flex flex-col gap-3 text-white">
					<h1 className="text-[clamp(2.8125rem,1.7131rem+4.8864vw,5.5rem)] font-bold leading-none">Are you starving?</h1>
					<p className="text-[22px]">Within a few clicks, find meals that are accessible near you</p>
				</div>

				{/* order card */}
				<Card className="max-w-6xl gap-5">
					<CardHeader>
						<Tabs defaultValue={'delivery'}>
							<TabsList>
								<TabsTrigger value="delivery" className="h-[40px]">
									<Bike />
									Delivery
								</TabsTrigger>
								<TabsTrigger value="pickup" className="h-[40px]">
									<Bag />
									Pickup
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</CardHeader>
					<Separator />
					<CardContent className="flex sm:flex-row flex-col gap-6">
						<div className="relative flex items-center rounded-[8px] focus:border focus-within:ring-1 focus-within:ring-[#F17228] pl-4 bg-[#F5F5F5] flex-1">
							<Search className="h-[20px] w-[20px] text-[#F17228]" />
							<Input
								type="text"
								value={filter}
								name="food_order_input"
								onChange={e => setFilter(e.target.value)}
								placeholder="What do you like to eat today?"
								className="border-0 focus-visible:ring-0 shadow-none h-[60px] placeholder:text-lg text-lg! placeholder:text-[#9E9E9E]"
							/>
						</div>

						<Button onClick={handleClick} disabled={isFiltering} className="bg-linear-to-r from-[#FF7A7A] to-[#F65900] sm:h-full h-[60px] has-[>svg]:px-12 gap-2 text-lg font-bold">
							{isFiltering ? <Spinner className="h-[20px] w-[20px]" strokeWidth={3} /> : <Search className="h-[20px] w-[20px]" strokeWidth={3} />}
							{isFiltering ? "Finding Meal..." : "Find Meal"}
						</Button>
					</CardContent>
				</Card>
			</div>

			<div className="relative self-end h-[500px] aspect-square max-xl:hidden">
				<div className="absolute -bottom-12 w-full h-full drop-shadow-[-20px_40px_50px_rgba(0,0,0,0.6)]">
					<Image
						src={'/hero-image.png'}
						alt="Image"
						height={505}
						width={604}
						className="object-contain w-full h-full"
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
