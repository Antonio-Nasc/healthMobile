import { Text, View } from "react-native";
import styles from "./style";
interface ResultImcProps{
    resultImc: string | null;
    messageResultImc: string;

}
export default function ResultImc({resultImc, messageResultImc} : ResultImcProps) {
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{messageResultImc}</Text>
            <Text style={styles.numberImc}>{resultImc}</Text>
        </View>
    )
}