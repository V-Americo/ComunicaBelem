import react from "react";
import { Text, View, TextInput, Button,StyleSheet,  } from "react-native";

const EnderecoScreen = ({ navigation }) => {
    return(
        <View style={styles.container} >
            <Text style={styles.title}>Informe o Endereço</Text>
            <TextInput placeholder="Endereço" style={styles.input} />
            <TextInput placeholder="Número"  style={styles.input} />
            <TextInput placeholder="Complemento"  style={styles.input} />
            <TextInput placeholder="Ponto De Referência"  style={styles.input} />
            <textarea placeholder="Descreva com mais detalhes" style={styles.input}></textarea>

            <Button title="Finalizar Denúncia"  onPress={() => { /* Adicione a lógica de registro aqui */ }} />
            
        </View>
    );

    
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    },
title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    },
input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    },
})


export default EnderecoScreen;