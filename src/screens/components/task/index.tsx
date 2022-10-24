import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string,
    state: string,
    onRemove:()=> void;
}

export default function Task(props: Props){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonState} onPress={props.onRemove}>
            </TouchableOpacity>  
                <Text style={styles.name}>{props.name} - {props.state}</Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}