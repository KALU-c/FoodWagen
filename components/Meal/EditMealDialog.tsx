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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { addMealSchema } from "@/schema/add-meal"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

type AddMealSchemaType = z.infer<typeof addMealSchema>

const EditMealDialog = ({
	foodId,
	children,
	foodName,
	foodImage,
	foodRating,
	restaurantLogo,
	restaurantName,
	restaurantStatus
}: {
	children: React.ReactNode,
	foodId: string,
	foodName: string,
	foodRating: number,
	foodImage: string,
	restaurantName: string
	restaurantLogo: string
	restaurantStatus: boolean
}) => {
	const queryClient = useQueryClient()
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<AddMealSchemaType>({
		resolver: zodResolver(addMealSchema),
		defaultValues: {
			food_name: foodName,
			food_image: foodImage,
			food_rating: Number(foodRating),
			restaurant_logo: restaurantLogo,
			restaurant_name: restaurantName,
			restaurant_status: restaurantStatus === true ? "Open Now" : "Closed"
		}
	})

	const onSubmit = async (value: AddMealSchemaType) => {
		setIsLoading(true)
		try {
			const payload = {
				name: value.food_name,
				avatar: value.food_image,
				rating: value.food_rating,
				open: value.restaurant_status === "Open Now" ? true : false,
				logo: value.restaurant_logo
			}

			await axios.put(`https://6852821e0594059b23cdd834.mockapi.io/Food/${foodId}`, payload);
			queryClient.invalidateQueries({ queryKey: ['featured-meals'] })

			toast.success("Meal updated successfully!")
		} catch (error) {
			console.error(error)
			toast.error("Failed to update meal. Please try again.")
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
			<DialogContent showCloseButton={false} className="sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle className="text-center text-2xl font-bold text-primary">Edit Meal</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid gap-6">
							<FormField
								control={form.control}
								name="food_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Food name</FormLabel>
										<FormControl>
											<Input
												id="food_name"
												placeholder="Food name"
												disabled={isLoading}
												{...field}
												className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="food_rating"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Food rating</FormLabel>
										<FormControl>
											<Input
												id="food_rating"
												placeholder="Food rating"
												disabled={isLoading}
												type="number"
												{...field}
												onChange={(e) => field.onChange(e.target.valueAsNumber)}
												className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="food_image"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Food image</FormLabel>
										<FormControl>
											<Input
												id="food_image"
												placeholder="Food image (link)"
												disabled={isLoading}
												{...field}
												className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="restaurant_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Restaurant name</FormLabel>
										<FormControl>
											<Input
												id="restaurant_name"
												placeholder="Restaurant name"
												disabled={isLoading}
												{...field}
												className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="restaurant_logo"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Restaurant logo</FormLabel>
										<FormControl>
											<Input
												id="restaurant_logo"
												placeholder="Restaurant logo (link)"
												disabled={isLoading}
												{...field}
												className="h-[50px] bg-[#F5F5F5] placeholder:text-[#9E9E9E] text-lg! border-none pl-4"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="restaurant_status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Restaturant status</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												value={field.value}
												required
											>
												<SelectTrigger disabled={isLoading} className="bg-[#F5F5F5] h-[50px]! w-full pl-4 text-lg data-placeholder:text-[#9E9E9E]">
													<SelectValue placeholder="Restaurant status (open/close)" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Open Now" className="h-[40px] text-lg">Open Now</SelectItem>
													<SelectItem value="Closed" className="h-[40px] text-lg">Closed</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter className="pt-4">
							<Button disabled={isLoading} type="submit" className="flex-1 bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] h-[50px] text-lg font-bold rounded-xl drop-shadow-[0px_10px_5px_rgba(255,174,0,0.29)]">
								{isLoading && <Spinner />}
								{isLoading ? "Updating Food..." : "Save"}
							</Button>
							<DialogClose asChild>
								<Button disabled={isLoading} variant="outline" className="flex-1 rounded-xl border-primary h-full text-lg font-bold">Cancel</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default EditMealDialog
