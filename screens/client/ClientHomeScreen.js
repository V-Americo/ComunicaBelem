import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ClientHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.generalText}>
            Olá, <Text style={styles.boldText}>Victor Américo!</Text>
          </Text>
          <Text style={styles.generalText}>Precisa fazer uma denúncia?</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonDenuncia} onPress={() => navigation.navigate('DenunciaFotoScreen')}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTextDenuncia}>DENUNCIE</Text>
            <Text style={styles.buttonTextSecundario}>um vazamento</Text>
          </View>
          <Image
            source={require('../../assets/denuncia.png')}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStatus} onPress={() => { /* Adicione a lógica de registro aqui */ }}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonTextStatus}>STATUS</Text>
          <Text style={styles.buttonTextSecundario}>Das Denuncias</Text>
        </View>
          <Image
            source={require('../../assets/status.png')}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E313F',
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 40,
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  profileTextContainer: {
    flexDirection: 'column',
  },
  boldText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  buttonDenuncia: {
    flexDirection: 'row',
    backgroundColor: '#ff6347',
    padding: 30,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  buttonStatus: {
    flexDirection: 'row',
    backgroundColor: '#FF8A00',
    padding: 30,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  buttonIcon: {
    width: 60,
    height: 60,
  },
  buttonTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonTextDenuncia: {
    marginLeft:20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonTextStatus: {
    marginLeft:30,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonTextSecundario: {
    color: 'white',
    fontSize: 20,
  },
  generalText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ClientHomeScreen;
