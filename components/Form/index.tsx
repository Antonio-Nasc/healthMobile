import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = useState<string>("")
    const [weight, setWeight] = useState<string>("");
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState<string | null>(null);
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        if (!isNaN(heightNum) && !isNaN(weightNum)) {
            const calculatedImc = (weightNum / (heightNum * heightNum)).toFixed(2);
            setImc(calculatedImc);
        }
    }
    function validationImc() {
        if (weight && height) {
            imcCalculator();
            setWeight("");
            setHeight("");
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
        } else {
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e a altura");
        }
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric" />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric" />
                <TouchableOpacity
                    onPress={() => validationImc()}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}