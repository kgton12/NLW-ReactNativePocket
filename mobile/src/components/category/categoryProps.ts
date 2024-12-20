import type { PressableProps } from "react-native";

export type CategoryProps = PressableProps & {
	iconId: string;
	isSelected?: boolean;
	name: string;
};
