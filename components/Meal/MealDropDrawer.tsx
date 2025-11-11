"use client";

import {
	MoreVertical,
	PencilLine,
	Trash2
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	DropDrawer,
	DropDrawerContent,
	DropDrawerGroup,
	DropDrawerItem,
	DropDrawerTrigger
} from "@/components/ui/dropdrawer";
import { FeaturedMealType } from "@/types/featured-meals";
import DeleteMealDialog from "./DeleteMealDialog";
import EditMealDialog from "./EditMealDialog";

export function MealDropDrawer({
	disabled = false,
	meal
}: {
	disabled?: boolean,
	meal: FeaturedMealType
}) {
	const [open, setOpen] = useState(false);

	return (
		<DropDrawer open={open} onOpenChange={setOpen}>
			<DropDrawerTrigger asChild>
				<Button size={'icon'} variant={'ghost'} disabled={disabled}>
					<MoreVertical className="text-[#424242] text-xl" />
				</Button>
			</DropDrawerTrigger>
			<DropDrawerContent>
				<DropDrawerGroup>
					<EditMealDialog
						foodId={meal?.id}
						foodName={meal?.name}
						foodImage={meal?.image}
						foodRating={meal?.rating}
						restaurantLogo={meal?.logo}
						restaurantName={meal?.restaurantName}
						restaurantStatus={meal?.open}
					>
						<DropDrawerItem icon={<PencilLine className="h-5 w-5" />} onSelect={(e) => e.preventDefault()}>
							Edit
						</DropDrawerItem>
					</EditMealDialog>
					<DeleteMealDialog foodId={meal.id}>
						<DropDrawerItem variant="destructive" icon={<Trash2 className="h-5 w-5" />} onSelect={(e) => e.preventDefault()}>
							Delete
						</DropDrawerItem>
					</DeleteMealDialog>
				</DropDrawerGroup>
			</DropDrawerContent>
		</DropDrawer>
	);
}