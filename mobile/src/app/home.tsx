import { Categories } from "@/components/categories";
import type { CategoriesProps } from "@/components/categories/categoriesProps";
import type { PlaceProps } from "@/components/place/placeProps";
import { Places } from "@/components/places";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { LocationMap } from "../components/locationMap";

export type MarketProps = PlaceProps & {
	latitude: number;
	longitude: number;
};

const currentLocation = {
	latitude: -23.5505199,
	longitude: -46.6333094,
};

export default function Home() {
	const [categories, setCategories] = useState<CategoriesProps>([]);
	const [category, setCategory] = useState("");
	const [markets, setMarkets] = useState<MarketProps[]>([]);

	async function fetchCategories() {
		try {
			const { data } = await api.get("/categories");
			setCategories(data);
			setCategory(data[0].id);
		} catch (error) {
			console.log(error);
			Alert.alert("Erro", "Erro ao buscar categorias");
		}
	}

	async function fetchMarkets() {
		if (!category) {
			return;
		}

		const { data } = await api.get(`/markets/category/${category}`);
		setMarkets(data);

		try {
		} catch (error) {
			console.log(error);
			Alert.alert("Erro ao buscar locais");
		}
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		fetchMarkets();
	}, [category]);

	return (
		<View style={styles.container}>
			<Categories data={categories} onSelect={setCategory} selected={category} />
			<LocationMap markets={markets} currentLocation={currentLocation} />
			<Places data={markets} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: { flex: 1 },
});
