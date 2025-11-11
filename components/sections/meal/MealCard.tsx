import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MoreVertical, Star, Tag } from "lucide-react"
import Image from "next/image"

const MealCard = () => {
	return (
		<Card className="p-0 gap-[28px] min-w-[340px] max-w-[357px] border-none shadow-none">
			<CardHeader className="relative p-0 h-[301px] rounded-2xl overflow-hidden gap-0">
				<Image
					alt="" // TODO - add meal name
					width={340}
					height={301}
					src={'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'}
					className="absolute h-full object-cover transition-transform duration-500 hover:scale-105"
					unoptimized
				/>

				<div className="absolute top-4 left-4 bg-[#F17228] px-4 py-2 flex items-center gap-[10px] rounded-[8px]">
					<Tag className="size-5 fill-white text-[#F17228]" />
					<p className="font-bold text-[22px] leading-none text-white">$2.99</p>
				</div>
			</CardHeader>
			<CardContent className="p-0 flex justify-between">
				<div className="flex gap-6">
					<Image
						src={'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=120&q=60'}
						alt="" // TODO
						height={64}
						width={64}
						className="h-16 w-16 rounded-lg"
					/>

					<div className="flex flex-col gap-1">
						<p className="text-[22px] font-bold leading-none">Bow Lasagna</p>
						<div className="flex items-center gap-2">
							<Star className="size-[22px] text-primary fill-primary" />
							<p className="text-[22px] text-primary">4.6</p>
						</div>
					</div>
				</div>
				<MoreVertical className="text-[#424242] text-xl" />
			</CardContent>
			<CardFooter className="p-0">
				<div className="px-4 py-2 bg-[#F17228]/20 rounded-2xl">
					<p className="text-xl font-bold text-[#F17228]">Closed</p>
				</div>
			</CardFooter>
		</Card>
	)
}

export default MealCard
