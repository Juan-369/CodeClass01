import { Text, View } from 'react-native';
let nome = 'Isa';

function gerarBoasVindas(nome) { 
  return "Bem-vindo, " + nome; 
}

const somar = (a, b) => {
  return a + b;
};



const tecnologias = [
  "JavaScript", "React Native", "Expo"
];

const modulos = [
  {
    id: 1,
    nome: "JavaScript",
    dificuldade: "Fácil",
    concluido: true
  },
  {
    id: 2,
    nome: "React Native",
    dificuldade: "Médio",
    concluido: false
  },
  {
    id: 3,
    nome: "Componentes",
    dificuldade: "Médio",
    concluido: false
  }
];



const aluno = { 
  nome: "João", 
  idade: 16, 
  curso: "React Native", 
  turma: "Turma 1" ,
  telefone: '38999'
};
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Lucas", nota: 5 },
  { nome: "Mariana", nota: 9 },
  { nome: "Pedro", nota: 4 }
];


const resultado = alunos.map((aluno) => {
  return aluno.nome;
});


const alunosAprovados = alunos.filter((aluno) => {
  return aluno.nota >= 6;
});

const produtos = [
  { id: 1, nome: "Mouse", preco: 35 },
  { id: 2, nome: "Teclado", preco: 80 },
  { id: 3, nome: "Monitor", preco: 650 }
];

const produtoEncontrado = produtos.find((produto) => {
  return produto.id === 2;
});


const nome1 = "Isa";
const curso = "React Native";

const mensagem = `Olá, ${nome}! Bem-vindo ao curso de ${curso}.`;

export default function RevisaoJavaScriptScreen() {
  return (
    <View>
       <Text>Template strings</Text>
      <Text>{mensagem}</Text> 
    </View>
  );
}