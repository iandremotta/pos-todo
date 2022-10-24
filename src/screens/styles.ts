import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor: '#131016', padding:24
    },
    title:{
      color: '#FDFCFE', fontSize:24, fontWeight: 'bold', k:48
    },
    input:{
      flex:1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#fff',
      marginTop: 10,
      padding: 15
  },
  button:{
      height: 56,
      marginTop: 10,
      width: 56,
      borderRadius:5,
      backgroundColor: '#31cf67',
      alignItems: "center",
      justifyContent: 'center'
  },
    buttonText:{
        color:'#fff',
        fontSize: 24,
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
      fontSize: 24,
      color: '#FDFCFE',
    }
  });