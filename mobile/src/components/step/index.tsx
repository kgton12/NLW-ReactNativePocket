import { colors } from "@/styles/theme";
import { Text, View } from "react-native";
import type { stepProps } from "./stepProps";
import { styles } from "./styles";

export function Step(props: stepProps) {
	return (
		<View style={styles.container}>
			{props.Icon && <props.Icon size={32} color={colors.red.base} />}
			<View style={styles.details}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.description}>{props.description}</Text>
			</View>
		</View>
	);
}
