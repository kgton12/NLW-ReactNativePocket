import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { Coupon } from "@/components/market/coupon";
import { Cover } from "@/components/market/cover";
import { Details } from "@/components/market/details";
import type { DetailsProps } from "@/components/market/details/detailsProps";
import { api } from "@/service/api";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Modal, ScrollView, StatusBar, View } from "react-native";

type MarketParams = { id: string };
const qrLock = useRef(false);

type DataProps = DetailsProps & {
	cover: string;
};

export default function Market() {
	const [data, setData] = useState<DataProps>();
	const [coupon, setCoupon] = useState<string | null>(null);
	const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);
	const [couponIsFetching, setCouponIsFetching] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const params = useLocalSearchParams<MarketParams>();

	const [_, requestCameraPermissions] = useCameraPermissions();

	async function fetchMarket() {
		try {
			const { data } = await api.get(`/markets/${params.id}`);
			setData(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			Alert.alert("Erro", "Não foi possivel carregar os dados", [{ text: "OK", onPress: () => router.back() }]);
		}
	}

	async function handleOpenCamera() {
		try {
			const { granted } = await requestCameraPermissions();

			if (!granted) {
				Alert.alert("Erro", "É necessário conceder permissão para acessar a camera");
				return;
			}

			setIsVisibleCameraModal(true);
			qrLock.current = false;
		} catch (error) {
			console.error(error);
			Alert.alert("Erro", "Não foi possivel abrir a camera", [{ text: "OK", onPress: () => router.back() }]);
		}
	}

	async function getCoupon(id: string) {
		try {
			setCouponIsFetching(true);
			const { data } = await api.patch(`/coupons/${id}`);
			Alert.alert("Sucesso", data.coupon);
			setCoupon(data.coupon);
		} catch (error) {
			console.error(error);
			Alert.alert("Erro", "Não foi possivel obter o cupom");
		} finally {
			setCouponIsFetching(false);
		}
	}

	function handleUseCoupon(id: string) {
		setIsVisibleCameraModal(false);
		Alert.alert("Coupon", "Não é possivel reutilizar o cupom resgatado. Deseja realmente resgatar?", [
			{ text: "Cancelar", style: "cancel" },
			{ text: "Sim", onPress: () => getCoupon(id) },
		]);
	}

	useEffect(() => {
		fetchMarket();
	}, [params.id, coupon]);

	if (isLoading) {
		return <Loading />;
	}

	if (!data) {
		return <Redirect href="/home" />;
	}

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<Cover uri={data.cover} />

				<Details data={data} />
			</ScrollView>

			{coupon && <Coupon code={coupon} />}

			<View style={{ padding: 32 }}>
				<Button onPress={handleOpenCamera}>
					<Button.Title>Ler QR Code</Button.Title>
				</Button>
			</View>

			<Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
				<CameraView
					style={{ flex: 1 }}
					facing="back"
					onBarcodeScanned={({ data }) => {
						if (data && !qrLock.current) {
							qrLock.current = true;
							setTimeout(() => {
								handleUseCoupon(data);
							}, 500);
						}
					}}
				/>

				<View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
					<Button onPress={() => setIsVisibleCameraModal(false)} isLoading={couponIsFetching}>
						<Button.Title>Voltar</Button.Title>
					</Button>
				</View>
			</Modal>
		</View>
	);
}
