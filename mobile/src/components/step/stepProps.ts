import type { IconProps } from "@tabler/icons-react-native";
import type React from "react";

export interface stepProps {
	title: string;
	description: string;
	Icon: React.ComponentType<IconProps>;
}
