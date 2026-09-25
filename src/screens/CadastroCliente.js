import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import InputField from '../components/InputField';

export default function CadastroClienteScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroEndereco, setErroEndereco] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroCidade, setErroCidade] = useState('');
  const [erroBairro, setErroBairro] = useState('');
  const [erroEstado, setErroEstado] = useState('');

  const validarNome = (val) => { setNome(val); setErroNome(val.trim() ? '' : 'Nome é obrigatório'); };
  
  const validarEmail = (val) => {
    setEmail(val);
    if (!val.trim()) setErroEmail('E-mail é obrigatório');
    else if (!val.includes('@')) setErroEmail('E-mail deve conter @');
    else setErroEmail('');
  };

  const validarEndereco = (val) => { setEndereco(val); setErroEndereco(val.trim() ? '' : 'Endereço é obrigatório'); };

  const validarTelefone = (val) => {
    setTelefone(val);
    const apenasNumeros = val.replace(/\D/g, '');
    if (!val.trim()) setErroTelefone('Telefone é obrigatório');
    else if (apenasNumeros.length < 10) setErroTelefone('O telefone deve possuir pelo menos 10 números');
    else setErroTelefone('');
  };

  const validarCidade = (val) => { setCidade(val); setErroCidade(val.trim() ? '' : 'Cidade é obrigatória'); };
  const validarBairro = (val) => { setBairro(val); setErroBairro(val.trim() ? '' : 'Bairro é obrigatório'); };
  const validarEstado = (val) => { setEstado(val); setErroEstado(val.trim() ? '' : 'Estado é obrigatório'); };

  const formValido =
    nome.trim() !== '' &&
    email.trim() !== '' && email.includes('@') &&
    endereco.trim() !== '' &&
    telefone.replace(/\D/g, '').length >= 10 &&
    cidade.trim() !== '' &&
    bairro.trim() !== '' &&
    estado.trim() !== '' &&
    !erroNome && !erroEmail && !erroEndereco && !erroTelefone && !erroCidade && !erroBairro && !erroEstado;

  return (
    <ScrollView style={styles.container}>
      <InputField label="Nome *" placeholder="Digite seu nome completo" value={nome} onChangeText={validarNome} onBlur={() => validarNome(nome)} error={erroNome} />
      <InputField label="E-mail *" placeholder="exemplo@email.com" value={email} onChangeText={validarEmail} onBlur={() => validarEmail(email)} error={erroEmail} keyboardType="email-address" autoCapitalize="none" />
      <InputField label="Endereço *" placeholder="Rua das Flores, 120" value={endereco} onChangeText={validarEndereco} onBlur={() => validarEndereco(endereco)} error={erroEndereco} />
      <InputField label="Telefone *" placeholder="(00) 00000-0000" value={telefone} onChangeText={validarTelefone} onBlur={() => validarTelefone(telefone)} error={erroTelefone} keyboardType="phone-pad" />
      <InputField label="Cidade *" placeholder="Digite sua cidade" value={cidade} onChangeText={validarCidade} onBlur={() => validarCidade(cidade)} error={erroCidade} />
      <InputField label="Bairro *" placeholder="Digite seu bairro" value={bairro} onChangeText={validarBairro} onBlur={() => validarBairro(bairro)} error={erroBairro} />
      <InputField label="Estado *" placeholder="Ex: MG, SP" value={estado} onChangeText={validarEstado} onBlur={() => validarEstado(estado)} error={erroEstado} maxLength={2} autoCapitalize="characters" />

      <View style={styles.buttonContainer}>
        <Button title="CADASTRAR CLIENTE" disabled={!formValido} onPress={() => alert('Cliente cadastrado!')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#f5f5f5' },
  buttonContainer: { marginTop: 10, marginBottom: 30 },
});