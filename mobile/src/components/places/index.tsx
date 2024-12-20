import { Place } from "@/components/place";
import type { PlaceProps } from "@/components/place/placeProps";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";

type Props = {
	data: PlaceProps[];
};

export function Places({ data }: Props) {
	const dimensions = useWindowDimensions();
	const bottomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = {
		min: 278,
		max: dimensions.height - 128,
	};

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={[snapPoints.min, snapPoints.max]}
			handleIndicatorStyle={styles.indicator}
			backgroundStyle={styles.container}
			enableOverDrag={false}
		>
			<BottomSheetFlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Place data={item} onPress={() => router.navigate(`/market/${item.id}`)} />}
				contentContainerStyle={styles.content}
				ListHeaderComponent={() => <Text style={styles.title}>Explore locais perto de você </Text>}
				showsVerticalScrollIndicator={false}
			/>
		</BottomSheet>
	);
}
