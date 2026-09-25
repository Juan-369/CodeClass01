import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import InputField from '../components/InputField';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const validarEmail = (texto: string) => {
    setEmail(texto);
    if (!texto.trim()) {
      setErroEmail('O e-mail é obrigatório');
    } else if (!texto.includes('@')) {
      setErroEmail('Digite um e-mail válido');
    } else {
      setErroEmail('');
    }
  };

  const validarSenha = (texto: string) => {
    setSenha(texto);
    if (!texto) {
      setErroSenha('A senha é obrigatória');
    } else if (texto.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres');
    } else {
      setErroSenha('');
    }
  };

  const formValido =
    email.trim() !== '' &&
    email.includes('@') &&
    senha.length >= 6 &&
    !erroEmail &&
    !erroSenha;

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <InputField
        label="E-mail *"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={validarEmail}
        onBlur={() => validarEmail(email)}
        error={erroEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <InputField
        label="Senha *"
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={validarSenha}
        onBlur={() => validarSenha(senha)}
        error={erroSenha}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button
          title="ENTRAR"
          disabled={!formValido}
          onPress={() => alert('Login efetuado!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#f5f5f5' },
  buttonContainer: { marginTop: 10 },
});