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

export function MealDropDrawer() {
	const [open, setOpen] = useState(false);

	return (
		<DropDrawer open={open} onOpenChange={setOpen}>
			<DropDrawerTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<MoreVertical className="text-[#424242] text-xl" />
				</Button>
			</DropDrawerTrigger>
			<DropDrawerContent>
				<DropDrawerGroup>
					<DropDrawerItem icon={<PencilLine className="h-5 w-5" />} onSelect={(e) => e.preventDefault()}>
						Edit
					</DropDrawerItem>
					{/* <DropDrawerSeparator /> */}
					<DropDrawerItem variant="destructive" icon={<Trash2 className="h-5 w-5" />}>
						Delete
					</DropDrawerItem>
				</DropDrawerGroup>
			</DropDrawerContent>
		</DropDrawer>
	);
}