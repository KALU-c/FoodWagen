"use client"

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
import { useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"

const DeleteMealDialog = ({ children, foodId }: { children: React.ReactNode, foodId: string }) => {
	const queryClient = useQueryClient()
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const onDelete = async () => {
		setIsLoading(true)
		try {
			await axios.delete(`https://6852821e0594059b23cdd834.mockapi.io/Food/${foodId}`)
			queryClient.invalidateQueries({ queryKey: ['featured-meals'] })
			toast.success("Meal deleted successfully!")
		} catch (error) {
			console.error(error)
			toast.error("Failed to delete meal. Please try again.")
		} finally {
			setOpen(false)
			setIsLoading(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent showCloseButton={false} className="sm:max-w-[600px] gap-7">
				<DialogHeader>
					<DialogTitle className="text-center text-2xl font-bold text-primary">Delete Meal</DialogTitle>
				</DialogHeader>
				<p className="text-lg text-[#9E9E9E]">Are you sure you want to delete this meal? Actions cannot be reversed.</p>
				<DialogFooter>
					<Button
						disabled={isLoading}
						onClick={onDelete}
						type="submit"
						className="flex-1 bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] h-[50px] text-lg font-bold rounded-xl drop-shadow-[0px_10px_5px_rgba(255,174,0,0.29)]"
					>
						{isLoading ? "Deleting food..." : "Yes"}
					</Button>
					<DialogClose asChild>
						<Button
							disabled={isLoading}
							variant="outline"
							className="flex-1 rounded-xl border-primary h-full text-lg font-bold"
						>
							Cancel
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteMealDialog
