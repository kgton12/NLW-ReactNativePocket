import type { CategoryProps } from "@/components/category/categoryProps";
import { colors } from "@/styles/theme";
import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function Category({ name, iconId, isSelected = false, ...rest }: CategoryProps) {
	const Icon = categoriesIcons[iconId];
	return (
		<Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
			<Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
			<Text style={[styles.name, isSelected && styles.nameSelected]}></Text>
		</Pressable>
	);
}
