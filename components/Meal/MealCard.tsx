import { MealDropDrawer } from "@/components/Meal/MealDropDrawer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FeaturedMealType } from "@/types/featured-meals"
import { Star, Tag } from "lucide-react"
import Image from "next/image"

const MealCard = ({
	name,
	restaurantName,
	image,
	rating,
	Price,
	logo,
	status
}: FeaturedMealType) => {
	return (
		<Card className="p-0 gap-[28px] min-w-[357px] w-full border-none shadow-none">
			<CardHeader className="relative p-0 h-[301px] rounded-2xl overflow-hidden gap-0">
				<Image
					alt={name}
					width={340}
					height={301}
					src={image}
					className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-105"
					unoptimized
				/>

				<div className="absolute top-4 left-4 bg-[#F17228] px-4 py-2 flex items-center gap-[10px] rounded-[8px]">
					<Tag className="size-5 fill-white text-[#F17228]" />
					<p className="font-bold text-[22px] leading-none text-white">${Price}</p>
				</div>
			</CardHeader>
			<CardContent className="p-0 flex justify-between">
				<div className="flex gap-6">
					{logo && (
						<Image
							src={logo}
							alt={restaurantName}
							height={64}
							width={64}
							className="h-16 w-16 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
							unoptimized
						/>
					)}

					<div className="flex flex-col gap-1">
						<p className="text-[22px] font-bold leading-none">{restaurantName}</p>
						<div className="flex items-center gap-2">
							<Star className="size-[22px] text-primary fill-primary" />
							<p className="text-[22px] text-primary">{rating}</p>
						</div>
					</div>
				</div>

				<MealDropDrawer />
			</CardContent>
			<CardFooter className="p-0">
				<div className={cn("px-4 py-2 rounded-2xl", status === "Closed" ? "bg-[#F17228]/20" : "bg-[#79B93C]/20")}>
					<p className={cn("text-xl font-bold leading-none", status === "Closed" ? "text-[#F17228]" : "text-[#79B93C]")}>{status}</p>
				</div>
			</CardFooter>
		</Card>
	)
}

export default MealCard
