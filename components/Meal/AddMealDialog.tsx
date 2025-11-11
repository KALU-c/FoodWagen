import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const AddMealDialog = ({ children }: { children: React.ReactNode }) => {
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					{children}
				</DialogTrigger>
				<DialogContent showCloseButton={false} className="sm:max-w-[600px]">
					<DialogHeader>
						<DialogTitle className="text-center text-2xl font-bold text-primary">Add Meal</DialogTitle>
					</DialogHeader>
					<div className="grid gap-6">
						<Input id="name-1" name="name" placeholder="Food name" className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4" />
						<Input id="username-1" name="username" placeholder="Food rating" className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4" />
						<Input id="username-1" name="username" placeholder="Food image (link)" className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4" />
						<Input id="username-1" name="username" placeholder="Restaurant name" className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4" />
						<Input id="username-1" name="username" placeholder="Restaurant logo (link)" className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4" />
						<Select>
							<SelectTrigger className="bg-[#F5F5F5] h-[50px]! w-full pl-4 text-lg data-placeholder:text-[#9E9E9E]">
								<SelectValue placeholder="Restaurant status (open/close)" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="open" className="h-[40px] text-lg">Open</SelectItem>
								<SelectItem value="close" className="h-[40px] text-lg">Close</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<DialogFooter className="pt-4">
						<Button type="submit" className="flex-1 bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] h-[50px] text-lg font-bold rounded-xl">Add</Button>
						<DialogClose asChild>
							<Button variant="outline" className="flex-1 rounded-xl border-primary h-full text-lg font-bold">Cancel</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	)
}

export default AddMealDialog
