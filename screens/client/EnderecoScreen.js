import react from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";

const EnderecoScreen = ({ navigation }) => {
    return(
        <View style={styles.container} >
            <Text style={styles.title}>Informe o Endereço</Text>

            <Text style={styles.topic}>Rua</Text>
            <TextInput style={styles.input} />

            <Text style={styles.topic}>Número (Se tiver)</Text>
            <TextInput style={styles.input} />

            <Text style={styles.topic}>Complemento</Text>
            <TextInput style={styles.input} />

            <Text style={styles.topic}>Ponto De Referência</Text>
            <TextInput style={styles.input} />

            <Text style={styles.topic}>Descrição</Text>
            <TextInput style={styles.input}></TextInput>

            <TouchableOpacity style={styles.buttonFinal} onPress={() => { navigation.navigate('DenunciaRealizadaScreen') }}>
                <Text style={styles.buttonText}>Finalizar Denúncia</Text>
            </TouchableOpacity>
            
        </View>
    );

    
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    padding: 16,
    backgroundColor: '#2E313F',
    },
title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color:'white',
    fontWeight:'bold',
    },
topic: {
    marginBottom: 5,
    color:'white',
    },
buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color:'white',
    },
input: {
    color:'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 8,
    },
buttonFinal: {
    backgroundColor: '#ff6347',
    padding: '5%',
    marginVertical: 10,
    marginRight:50,
    marginLeft:50,
    borderRadius: 8,

    },
})


export default EnderecoScreen;