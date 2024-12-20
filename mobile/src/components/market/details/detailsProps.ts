export type DetailsProps = {
	name: string;
	description: string;
	address: string;
	phone: string;
	coupons: string;
	rules: {
		id: string;
		description: string;
	}[];
};
