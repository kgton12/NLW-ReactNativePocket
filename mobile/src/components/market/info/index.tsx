import { colors } from "@/styles/theme";
import type { IconProps } from "@tabler/icons-react-native";
import type React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
	description: string;
	icon: React.ComponentType<IconProps>;
};

export function Info({ icon: Icon, description }: Props) {
	return (
		<View style={styles.container}>
			<Icon size={16} color={colors.gray[400]} />
			<Text style={styles.text}>{description}</Text>
		</View>
	);
}
