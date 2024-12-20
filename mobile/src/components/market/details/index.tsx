import { Info } from "@/components/market/info";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import type { DetailsProps } from "./detailsProps";
import { styles } from "./styles";

type Props = {
	data: DetailsProps;
};

export function Details({ data }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{data.name}</Text>
			<Text style={styles.description}>{data.description}</Text>
			<View style={styles.group}>
				<Text style={styles.title}>Informações</Text>
				<Info description={`${data.coupons} cupons disponíveis`} icon={IconTicket} />
				<Info description={data.address} icon={IconMapPin} />
				<Info description={data.phone} icon={IconPhone} />
			</View>
			<View style={styles.group}>
				<Text style={styles.title}>Regulamento</Text>
				{data.rules.map((item) => (
					<Text style={styles.rule} key={item.id}>
						{`\u2022${item.description}`}
					</Text>
				))}
			</View>
		</View>
	);
}
