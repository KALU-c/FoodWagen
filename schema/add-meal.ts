import { z } from "zod"

export const addMealSchema = z.object({
	food_name: z.string({
		error: "Food name is required"
	})
		.min(3, { error: "Food name must be at least 3 characters long" }),
	food_rating: z
		.number({
			error: "Food rating must be a number"
		})
		.min(0, { error: "Rating cannot be negative" })
		.max(5, { error: "Rating cannot be more than 5" }),
	food_image: z.url({ error: "Please provide a valid image URL" }),
	restaurant_name: z.string({
		error: "Restaurant name is required"
	})
		.min(3, { error: "Restaurant name must be at least 3 characters long" }),
	restaurant_logo: z.url({ error: "Please provide a valid logo URL" }),
	restaurant_status: z.enum(["Open Now", "Closed"], {
		error: "Restaurant status must be 'Open Now' or 'Closed'"
	})
})