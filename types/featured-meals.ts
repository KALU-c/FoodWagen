export type FeaturedMealType = {
	id: string;
	name: string;
	createdAt: string;
	avatar: string;
	rating: number;
	open: boolean;
	logo: string;
	Price: string;
	image: string;
	restaurantName: string;
	status: string;
	restaurant?: {
		name: string;
		logo: string;
		status: string;
	};
};
