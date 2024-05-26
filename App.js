import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
// Importando as telas
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ClientHomeScreen from './screens/client/ClientHomeScreen';
import DenunciaFotoScreen from './screens/client/DenunciaFotoScreen';
import EnderecoScreen from './screens/client/EnderecoScreen';

// Importando dependências do bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Importando dependências do stack navigator
import { createStackNavigator } from '@react-navigation/stack';

// Definindo a tela HomeScreen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.generalText}>Home do user</Text>
      <Button
        style={styles.buttonStart}
        title="Entre na área do cliente"
        onPress={() => navigation.navigate('ClientHome')}
      />
    </View>
  );
}

// Definindo a tela SettingsScreen
// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Settings</Text>
//     </View>
//   );
// }

// Configurações do Stack Navigator para telas de autenticação
const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <AuthStack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ headerShown: false }} 
      />
    </AuthStack.Navigator>
  );
}

// Configurações do Stack Navigator para Client Home
const ClientHomeStack= createStackNavigator();
const DenunciaFotoStack = createStackNavigator();
const EnderecoStack = createStackNavigator();
function ClientHomeStackNavigator() {
  return (
    <ClientHomeStack.Navigator>
      <ClientHomeStack.Screen 
        name="ClientHomeScreen" 
        component={ClientHomeScreen} 
        options={{ headerShown: false }} 
      />
      <DenunciaFotoStack.Screen 
        name="DenunciaFotoScreen" 
        component={DenunciaFotoScreen} 
        options={{ headerShown: false }} 
      />
      <EnderecoStack.Screen 
        name="EnderecoScreen" 
        component={EnderecoScreen} 
        options={{ headerShown: false }} 
      />
    </ClientHomeStack.Navigator>
  );
}
// Configurações do Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }} 
      />
      <Tab.Screen 
        name="ClientHome" 
        component={ClientHomeStackNavigator} 
        options={{ title: 'Denúncias' }} 
      />
      {/* <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Configurações' }} 
      /> */}
    </Tab.Navigator>
  );
}

// Definindo os estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E313F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generalText:{
    color:'white',
  },
  buttonStart:{
    color:'white',
    backgroundColor: '#ff6347',
  },
});

// Função principal do App
export default function App() {
  return (
    <NavigationContainer>
      <ClientHomeStackNavigator />
    </NavigationContainer>
  );
}
