import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { MoreVertical } from "lucide-react"

const MealCardSkeleton = () => {
	return (
		<Card className="p-0 gap-[28px] min-w-[357px] w-full border-none shadow-none">
			<CardHeader className="relative p-0 h-[301px] rounded-2xl overflow-hidden gap-0">
				<Skeleton className="absolute h-full w-full" />
			</CardHeader>
			<CardContent className="p-0 flex justify-between">
				<div className="flex gap-6">
					<Skeleton className="h-16 w-16 rounded-lg" />

					<div className="flex flex-col gap-2">
						<Skeleton className="h-6 w-44" />
						<Skeleton className="h-6 w-24" />
					</div>
				</div>

				<Button size={'icon'} variant={'ghost'} disabled>
					<MoreVertical className="text-[#424242] text-xl" />
				</Button>
			</CardContent>
			<CardFooter className="p-0">
				<Skeleton className="h-9 w-32 rounded-2xl" />
			</CardFooter>
		</Card>
	)
}

export default MealCardSkeleton
