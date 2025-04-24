console.log("Meu primeiro programa");
const idade = 25; //criando variável e atribuindo
let primeiroNome = "Raissa";
const sobrenome = "Duarte";
const nome = primeiroNome + sobrenome
console.log("Meu nome é " + nome + " e tenho " + idade + " anos");
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`);

nomeCompleto = primeiroNome + sobrenome;
console.log(nome);
console.log(1 + 1)

console.log("\n \n \nLista de Destinos");
const estaAcompanhada = false;
const temPassagemComprada = true;
const destino = "Fortaleza";
const listaDeDestinos = new Array(
    `Salvador`,
    `Bahia`,
    `Fortaleza`
)//trabalhando com listas

listaDeDestinos.push(`Curitiba`) //adiciona um item na lista
listaDeDestinos.splice(0,1) //deletando um item da lista
console.log(listaDeDestinos);

idadeComprador = 17
if(idadeComprador >= 18){
    console.log("\nComprador maior de idade");
    listaDeDestinos.splice(0,1); //deletando um item da lista - pode comprar
}else{
    if(estaAcompanhada){ //ou else if tudo junto
        console.log("\nComprador está acompanhado");
        listaDeDestinos.splice(0,1); //deletando um item da lista - pode comprar
    }
    else{ //se condição for falsa
        console.log("\nComprador não é maior de idade e não está acompanhado");
    }
}
    if (idadeComprador >= 18 || estaAcompanhada == true) { //ou
       console.log("\nBoa viagem")
       listaDeDestinos.splice(0,1); //deletando um item da lista - pode comprar
    }

    console.log(listaDeDestinos);
console.log("\nEmbarque:") //quebra de linha

if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem!!");
}else{
    console.log("Você não pode embarcar.\n")
}

let exponenciacao = 2 * 2; // kelven ensinando
exponenciacao *= 4 // é o mesmo que exponenciacao = exponenciacao * 4;

let contador = 0;
while (contador <3){ // enquanto, repetidor
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existente")
    }else{
        console.log("Destino inexistente")
    }
    contador +=1;
}   









var listaDeNomes = ['Kelven', 'Raissa', 'Diana'];

for (let contador = 0; contador < listaDeNomes.length; contador++) {
    console.log(listaDeNomes[contador]);
}

function abrirPorta() {

}

function () {

}

abrirPorta();







