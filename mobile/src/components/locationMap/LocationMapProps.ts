import type { MarketProps } from "@/app/home";

export type LocationMapProps = {
	markets: MarketProps[];
	currentLocation: { latitude: number; longitude: number };
};
