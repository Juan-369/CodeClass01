import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import InputField from '../components/InputField';

export default function CadastroProdutoScreen() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroDescricao, setErroDescricao] = useState('');
  const [erroCategoria, setErroCategoria] = useState('');
  const [erroPreco, setErroPreco] = useState('');
  const [erroQuantidade, setErroQuantidade] = useState('');

  const validarNome = (val) => {
    setNome(val);
    setErroNome(val.trim() ? '' : 'Nome do produto é obrigatório');
  };

  const validarDescricao = (val) => {
    setDescricao(val);
    setErroDescricao(val.trim() ? '' : 'Descrição é obrigatória');
  };

  const validarCategoria = (val) => {
    setCategoria(val);
    setErroCategoria(val.trim() ? '' : 'Categoria é obrigatória');
  };

  const validarPreco = (val) => {
    setPreco(val);
    if (!val.trim()) {
      setErroPreco('Informe o preço do produto');
    } else {
      setErroPreco('');
    }
  };

  const validarQuantidade = (val) => {
    setQuantidade(val);
    const num = parseInt(val, 10);
    if (!val.trim()) {
      setErroQuantidade('Quantidade é obrigatória');
    } else if (isNaN(num) || num <= 0) {
      setErroQuantidade('A quantidade deverá ser maior que zero');
    } else {
      setErroQuantidade('');
    }
  };

  const formValido =
    nome.trim() !== '' &&
    descricao.trim() !== '' &&
    categoria.trim() !== '' &&
    preco.trim() !== '' &&
    quantidade.trim() !== '' &&
    parseInt(quantidade, 10) > 0 &&
    !erroNome && !erroDescricao && !erroCategoria && !erroPreco && !erroQuantidade;

  return (
    <ScrollView style={styles.container}>
      <InputField
        label="Nome do Produto *"
        placeholder="Ex: Teclado Mecânico"
        value={nome}
        onChangeText={validarNome}
        onBlur={() => validarNome(nome)}
        error={erroNome}
      />

      <InputField
        label="Descrição *"
        placeholder="Escreva uma descrição do produto"
        value={descricao}
        onChangeText={validarDescricao}
        onBlur={() => validarDescricao(descricao)}
        error={erroDescricao}
        multiline
      />

      <InputField
        label="Categoria *"
        placeholder="Ex: Informática, Material Escolar"
        value={categoria}
        onChangeText={validarCategoria}
        onBlur={() => validarCategoria(categoria)}
        error={erroCategoria}
      />

      <InputField
        label="Preço *"
        placeholder="Ex: 150.00"
        value={preco}
        onChangeText={validarPreco}
        onBlur={() => validarPreco(preco)}
        error={erroPreco}
        keyboardType="numeric"
      />

      <InputField
        label="Quantidade *"
        placeholder="Ex: 10"
        value={quantidade}
        onChangeText={validarQuantidade}
        onBlur={() => validarQuantidade(quantidade)}
        error={erroQuantidade}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button
          title="CADASTRAR PRODUTO"
          disabled={!formValido}
          onPress={() => alert('Produto cadastrado!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#f5f5f5' },
  buttonContainer: { marginTop: 10, marginBottom: 30 },
});