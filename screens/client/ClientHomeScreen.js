import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ClientHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
      <Text  style={styles.generalText}>
        Olá <Text style={styles.boldText}>USUÁRIO!</Text>
      </Text>
      <Text  style={styles.generalText}>Precisa fazer uma denúncia?</Text>
      </View>

      <TouchableOpacity style={styles.buttonDenuncia} onPress={() => navigation.navigate('DenunciaFotoScreen')}>
        <Text style={styles.generalText}> <Text style={styles.boldText}>DENUNCIE</Text> um vazamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStatus} onPress={() => { /* Adicione a lógica de registro aqui */ }}>
        <Text style={styles.generalText}>Status das denuncias</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E313F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profile:{
    justifyContent: 'top',
    alignItems: 'center',

  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  boldText: {
    color:'white',
    fontWeight: 'bold',
  },
  buttonDenuncia: {
    backgroundColor: '#ff6347',
    padding: '7%',
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonStatus: {
    backgroundColor: '#FF8A00',
    padding: '8%',
    marginVertical: 10,
    borderRadius: 5,
  },
  generalText: {
    color: '#fff',
  },
});


export default ClientHomeScreen;
