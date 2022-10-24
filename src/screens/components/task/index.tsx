import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

type Props = {
    name: string,
    state: string,
    onRemove:()=> void;
    onChangeState:()=> void;
    onCompletedState:()=> void;
}

export default function Task(props: Props){

    return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.buttonTask}
                onPress={props.onChangeState}
                onLongPress={props.onCompletedState}
            >
            {props.state == 'todo' && (
                <Icon name="circle-o" size={28} color="#ffc222" />
            )}
            {props.state == 'doing' && (
                <Icon name="dot-circle-o" size={28} color="#ffc222" />
            )}
            {props.state == 'completed' && (
                <Icon name="circle" size={28} color="#ffc222" />
            )}
            </TouchableOpacity>  
            <Text style={styles.name}>{props.name} - {props.state}</Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}