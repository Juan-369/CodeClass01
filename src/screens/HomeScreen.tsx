import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        CodeClass
      </Text>

      <Text style={styles.subtitulo}>
        Escolha uma area
      </Text>

     
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('ComponentesBasicos')}
      >
        <Text>
          Apresentacao do CodeClass
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoDestaque}
        onPress={() => navigation.navigate('GerenciadorProdutos', 1)}
      >
        <Text style={styles.textoBranco}>
          Gerenciador de Produtos
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroCliente')}
      >
        <Text>
          CADASTRO DE CLIENTE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroProdutoScreen')}
      >
        <Text>
          CADASTRO DE PRODUTO
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  // Estilo geral da tela.
  container: {
    flex: 1,                    
    backgroundColor: '#f1f5f9', 
    padding: 20,                
  },

  titulo: {
    fontSize: 30,           
    fontWeight: 'bold',     
    color: '#1e3a8a',      
  },

  subtitulo: {
    fontSize: 16,            
    color: '#64748b',       
    marginBottom: 20,        
  },
  
  botao: {
    backgroundColor: '#ffffff',
    padding: 18,                
    borderRadius: 10,          
    marginBottom: 12,          
  },
  
  botaoDestaque: {
    backgroundColor: '#4338ca', 
    padding: 18,                
    borderRadius: 10,           
    marginTop: 8,               
    marginBottom: 12,           
  },

  textoBranco: {
    color: '#ffffff',     
    fontWeight: 'bold',     
  },
});