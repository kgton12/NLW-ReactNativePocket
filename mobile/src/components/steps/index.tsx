import { Step } from "@/components/step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Steps() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Veja como funciona:</Text>

			<Step
				Icon={IconMapPin}
				title="Encontre estabelecimentos"
				description="Veja locais perto de você que são parceiros Nearby"
			/>

			<Step
				Icon={IconQrcode}
				title="Ative o cupom com o QR Code"
				description="Escaneie o código no estabelecimento para usar os benefício"
			/>

			<Step
				Icon={IconTicket}
				title="Garanta as vantagens perto de você"
				description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
			/>
		</View>
	);
}
