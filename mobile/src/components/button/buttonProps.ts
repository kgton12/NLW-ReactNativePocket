import type { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import type React from "react";
import type { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

export type IconProps = {
	icon: React.ComponentType<TablerIconProps>;
};
