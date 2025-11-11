import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardHeader
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Motorbike, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"

const Hero = () => {
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
									{/* TODO - change these icons */}
									<Motorbike />
									Delivery
								</TabsTrigger>
								<TabsTrigger value="pickup" className="h-[40px]">
									<ShoppingBag />
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
								name="food_order_input"
								placeholder="What do you like to eat today?"
								className="border-0 focus-visible:ring-0 shadow-none h-[60px] placeholder:text-lg text-lg! placeholder:text-[#9E9E9E]"
							/>
						</div>

						<Button className="bg-linear-to-r from-[#FF7A7A] to-[#F65900] sm:h-full h-[60px] has-[>svg]:px-12 gap-2 text-lg font-bold">
							<Search className="h-[20px] w-[20px]" strokeWidth={3} />
							Find Meal
						</Button>
					</CardContent>
				</Card>
			</div>

			<div className="relative self-end h-[500px] aspect-square max-md:hidden">
				{/* TODO - add image shadow */}
				<Image
					src={'/hero-image.png'}
					alt="Image"
					height={505}
					width={604}
					className="object-contain absolute -bottom-12 drop-shadow-2xl"
				/>
			</div>
		</section>
	)
}

export default Hero
