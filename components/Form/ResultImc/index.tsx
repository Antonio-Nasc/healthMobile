import { Text, View, TouchableOpacity, Share } from "react-native";
import styles from "./style";
interface ResultImcProps {
    resultImc: string | null;
    messageResultImc: string;

}
export default function ResultImc({ resultImc, messageResultImc }: ResultImcProps) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + resultImc
        })
    }
    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {resultImc != null ?
                    <TouchableOpacity style={styles.shared} onPress={onShare}>
                        <Text style={styles.sharedText}>Share</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
            <Text style={styles.information}>{messageResultImc}</Text>
            <Text style={styles.numberImc}>{resultImc}</Text>
        </View>
    )
}