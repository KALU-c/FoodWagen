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
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { addMealSchema } from "@/schema/add-meal"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"

type AddMealSchemaType = z.infer<typeof addMealSchema>

const AddMealDialog = ({ children }: { children: React.ReactNode }) => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<AddMealSchemaType>({
		resolver: zodResolver(addMealSchema)
	})

	const onSubmit = (value: AddMealSchemaType) => {
		setIsLoading(true)
		try {
			console.log(value)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent showCloseButton={false} className="sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle className="text-center text-2xl font-bold text-primary">Add Meal</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid gap-6">
							<FormField
								control={form.control}
								name="food_name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												id="food_name"
												placeholder="Food name"
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
										<FormControl>
											<Input
												id="food_rating"
												placeholder="Food rating"
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
										<FormControl>
											<Input
												id="food_image"
												placeholder="Food image (link)"
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
										<FormControl>
											<Input
												id="restaurant_name"
												placeholder="Restaurant name"
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
										<FormControl>
											<Input
												id="restaurant_logo"
												placeholder="Restaurant logo (link)"
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
										<FormControl>
											<Select
												onValueChange={field.onChange}
												value={field.value}
												required
											>
												<SelectTrigger className="bg-[#F5F5F5] h-[50px]! w-full pl-4 text-lg data-placeholder:text-[#9E9E9E]">
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
							<Button type="submit" className="flex-1 bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] h-[50px] text-lg font-bold rounded-xl">
								Add
							</Button>
							<DialogClose asChild>
								<Button variant="outline" className="flex-1 rounded-xl border-primary h-full text-lg font-bold">Cancel</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default AddMealDialog
