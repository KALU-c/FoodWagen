import { Button } from "@/components/ui/button"
import Image from "next/image"
import AddMealDialog from "../Meal/AddMealDialog"

const Navbar = () => {
	return (
		<nav className="container-desktop py-4 flex justify-between items-center">
			<Image
				src={'/logo.svg'}
				alt="FoodWangen logo"
				className="h-[30px] lg:h-[37px] w-fit"
				height={37}
				width={200}
			/>

			<AddMealDialog>
				<Button size={'lg'} className="rounded-[14px] text-lg font-semibold bg-linear-to-r from-[#FFBA26] to-[#FF9A0E]">
					Add Meal
				</Button>
			</AddMealDialog>
		</nav>
	)
}

export default Navbar
