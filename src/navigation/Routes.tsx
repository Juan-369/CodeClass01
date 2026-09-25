import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import ComponentesBasicos from '../screens/ComponentesBasicos';
import EstilizacaoScreen from '../screens/EstilizacaoScreen';
import GerenciadorProdutosScreen from '../screens/GerenciadorProdutosScreen';


import LoginScreen from '../screens/telaLogin';
import CadastroClienteScreen from '../screens/CadastroClienteScreen';
import CadastroProdutoScreen from '../screens/CadastroProdutoScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Menu Principal' }}
        />
        <Stack.Screen
          name="ComponentesBasicos"
          component={ComponentesBasicos}
          options={{ title: 'Apresentação do CodeClass' }}
        />
        <Stack.Screen
          name="EstilizacaoScreen"
          component={EstilizacaoScreen}
          options={{ title: 'Estilização' }}
        />
        <Stack.Screen
          name="GerenciadorProdutos"
          component={GerenciadorProdutosScreen}
          options={{ title: 'Gerenciador de Produtos' }}
        />


        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="CadastroCliente"
          component={CadastroClienteScreen}
          options={{ title: 'Cadastro de Cliente' }}
        />
        <Stack.Screen
          name="CadastroProdutoScreen"
          component={CadastroProdutoScreen}
          options={{ title: 'Cadastro de Produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}