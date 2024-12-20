import type { LocationMapProps } from "@/components/locationMap/LocationMapProps";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

export function LocationMap({ markets, currentLocation }: LocationMapProps) {
	return (
		<MapView
			style={{ flex: 1 }}
			initialRegion={{
				latitude: currentLocation.latitude,
				longitude: currentLocation.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Marker
				identifier="current"
				coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
				image={require("@/assets/location.png")}
			/>
			{markets.map((item) => (
				<Marker
					key={item.id}
					identifier={item.id}
					coordinate={{
						longitude: item.longitude,
						latitude: item.latitude,
					}}
					image={require("@/assets/pin.png")}
				>
					<Callout onPress={() => router.navigate(`/market/${item.id}`)}>
						<View>
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.address}>{item.address}</Text>
						</View>
					</Callout>
				</Marker>
			))}
		</MapView>
	);
}
const styles = StyleSheet.create({
	name: {
		fontSize: 14,
		color: colors.gray[600],
		fontFamily: fontFamily.medium,
	},
	address: {
		fontSize: 12,
		color: colors.gray[600],
		fontFamily: fontFamily.regular,
	},
});
