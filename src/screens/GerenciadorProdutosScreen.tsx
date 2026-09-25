import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import ProductCard from "../components/ProductCard";

interface Produto {
  id: string;
  nome: string;
}

export default function GerenciadorProdutosScreen({ route, navigation }: any) {
  const produtoId = route.params;

  const [nome, setNome] = useState('');

  const [produtos, setProdutos] = useState<Produto[]>([]);

  function adicionarProduto() {

    if (nome.trim() === '') {
      return;
    }


    const novoProduto: Produto = {

      id: Date.now().toString(),

      nome: nome,
    };


    setProdutos([...produtos, novoProduto]);


    setNome('');
  }
  return (
    <View >
      <Text>ID: {produtoId}</Text>

      <Text style={styles.titulo}>
        Gerenciador de Produtos
      </Text>

      <Text style={styles.subtitulo}>
        Cadastre produtos na lista
      </Text>


      <View style={styles.formulario}>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"

          value={nome}

          onChangeText={setNome}
        />

        <TouchableOpacity
          style={styles.botao}


          onPress={adicionarProduto}
        >
          <Text style={styles.textoBotao}>
            Adicionar Produto
          </Text>
        </TouchableOpacity>

      </View>


      <Text style={styles.contador}>
        Produtos cadastrados: {produtos.length}
      </Text>
      <FlatList

        data={produtos}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <ProductCard nome={item.nome} />
        )}


        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum produto cadastrado.
          </Text>
        }
      />
      <TouchableOpacity



        onPress={() =>


          navigation.goBack()
        }
      >

        <Text>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 20,
  },

  formulario: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#4338ca',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  contador: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#334155',
  },

  vazio: {
    textAlign: 'center',
    marginTop: 30,
    color: '#64748b',
  },

});