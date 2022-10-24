import { StyleSheet } from "react-native";

interface TypeProps {
    type: 'todo' | 'doing' | 'completed';
}

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1f1e25',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 10
    },
    name:{
        color: '#fff',
        flex: 1,
        padding: 20
    },
    buttonText:{
        fontSize: 24,
        color: '#fff'
    },
    button:{
        height: 56,
        width: 56,
        backgroundColor:'#e23c44',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTask:{
        height: 28,
        width: 28,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

});