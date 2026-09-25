import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/navigation/Routes'; // Importa a estrutura de navegação

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}