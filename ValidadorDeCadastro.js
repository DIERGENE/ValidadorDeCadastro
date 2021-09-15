
const dataAtual = new Date("2021-08-22");
const dataDoEvento = new Date("2021-08-25");
if (dataDoEvento > dataAtual) {
    console.log ("Permitir cadastro no evento");
} else {
    console.log("Acesso não permitido, data inválida")
}

//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

let idade = 1;
if(idade >= 18) {
    console.log("Permitir cadastro");
} else {
    console.log("cadastro não permitido pela idade")
}

//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

const listaDeParticipantesEPalestrantes = ["Diogo Preira", "Leticia Maria", "Maruzinha de Freitas", "Cecilia Pinheiro", "Vitoria Regia"];
let quantidadeDeParticipantesEPalestrantes = listaDeParticipantesEPalestrantes.length;
if(quantidadeDeParticipantesEPalestrantes < 100) {
    listaDeParticipantesEPalestrantes.push("Diego Cutrim");

    console.log("Inscrição feito com sucesso")
    console.log(listaDeParticipantesEPalestrantes);
} else {
    console.log("cadastro não permitido, limite de cadastro excedido")
}

//Listar participantes e palestrantes por evento.
//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.




