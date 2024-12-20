import { colors } from "@/styles/theme";
import { ActivityIndicator, Text, type TextProps, TouchableOpacity } from "react-native";
import type { ButtonProps, IconProps } from "./buttonProps";
import { styles } from "./styles";

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} disabled={isLoading} {...rest}>
			{isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
		</TouchableOpacity>
	);
}

function Title({ children }: TextProps) {
	return <Text style={styles.title}>{children}</Text>;
}

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={24} color={colors.gray["100"]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
