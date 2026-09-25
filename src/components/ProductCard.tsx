import { StyleSheet, Text, View } from 'react-native';


type ProductCardProps = {
  nome: string;
};

export default function ProductCard({ nome }: ProductCardProps) {
  return (
    <View style={styles.card}>

      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },

  nome: {
    fontSize: 18,
    color: '#1e293b',
  },
});