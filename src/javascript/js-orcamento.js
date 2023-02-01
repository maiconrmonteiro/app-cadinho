   // teste que estou fazendo

   var currentTime = new Date()
var horas = currentTime.getHours();
var minutos = currentTime.getMinutes();
var segundos = currentTime.getSeconds(); 
var diaa = currentTime.getDate(); 
var mess = currentTime.getMonth();
var anoo = currentTime.getFullYear();  
var Diaa = currentTime.getDay(); 
var Mess = currentTime.getUTCMonth();

if (minutos < 10)
minutos = "0" + minutos
if (segundos < 10)
segundos = "0" + segundos
if (dia < 10)
dia = "0" + dia
if (mes < 10)
mes = "0" + mes

arrayDia = new Array();
   arrayDia[0] = "Domingo";
   arrayDia[1] = "Segunda-Feira";
   arrayDia[2] = "Terça-Feira";
   arrayDia[3] = "Quarta-Feira";
   arrayDia[4] = "Quinta-Feira";
   arrayDia[5] = "Sexta-Feira";
   arrayDia[6] = "Sábado";

var arrayMess = new Array();
   arrayMess[0] = "Janeiro";
   arrayMess[1] = "Fevereiro";
   arrayMess[2] = "Março";      
   arrayMess[3] = "Abril";
   arrayMess[4] = "Maio";
   arrayMess[5] = "Junho";
   arrayMess[6] = "Julho";
   arrayMess[7] = "Agosto";
   arrayMess[8] = "Setembro";
   arrayMess[9] = "Outubro";
   arrayMess[10] = "Novembro";
   arrayMess[11] = "Dezembro";



   
   //fim do teste
    
    var dataReal = new Date();
    var dia = String(dataReal.getDate()).padStart(2, '0');
    var mes = String(dataReal.getMonth() + 1).padStart(2, '0');
    var ano = dataReal.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;
    var hora = dataReal.getMinutes()
    var controle = hora + mes + dia

function gerar() {
    var campos = window.document.getElementById('campos');

    var nome = window.document.getElementById('nome');
    var documento = window.document.getElementById('documento');
    documento = documento.value

    if (documento == "") {
        documento = 'Não informado' 
    }

    var carro = window.document.getElementById('carro');
    var cor = window.document.getElementById('cor');
    var placa = window.document.getElementById('placa');

    var servicos1 = window.document.getElementById('servicos1');
    var servicos2 = window.document.getElementById('servicos2');
    var servicos3 = window.document.getElementById('servicos3');
    var servicos4 = window.document.getElementById('servicos4');

    var valor = window.document.getElementById('valor');

    valor = valor.value

    if(valor == "") {
        alert('Você esqueceu do valor Cadinho')
        document.location.reload(true);
    } else {
            campos.innerHTML = `
  
            <div class="conteiner">
    <hr class="primeiraLinha">

    <div class="cabecaOrcamento">
        <div>
            <img class="logoOrcamento" src="../img/logo.png" alt="">
            <h4>Martelinho de Ouro</h4>
        </div>
        <div class="cabecalho-pa">
            <h3>Orçamento Nº ${controle}</h3>
            <p>Nome Fantasia: Cadinho Martelinho de Ouro </p>
            <p>CNPJ: 26.439.271/0001-31</p>
            <p>www.cadinhofraga.com.br</p>
            <p>Contato: (48) 9 8475-2125</p>
        </div>
        
    </div>
    <hr>
    <div class="cliente">
        <p><strong>Data Emissão:</strong> ${arrayDia[Diaa] + ", " + diaa + " de " + arrayMess[Mess] + " de " + anoo}</p>
        <p><strong>Dados do Cliente</strong></p>
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>Documento:</strong> ${documento}</p>
    </div>
    <hr>
    <div class="veiculo">
        <p><strong>Informações do Veiculo</strong></p>
        <p><strong>Carro:</strong> ${carro.value}</p>
        <p><strong>Cor:</strong> ${cor.value}</p>
        <p><strong>Placa:</strong> ${placa.value}</p>
    </div>
    <hr>
    <div class="servicosEfetuados">
        <p><strong>Reparo nas peças:</strong></p>
        <p>${servicos1.value}</p>
        <p>${servicos2.value}</p>
        <p>${servicos3.value}</p>
        <p>${servicos4.value}</p>
    </div>
    <div class="valorTotal">
        <p><strong>Total Geral</strong></p>
        <p><strong>R$</strong> ${valor}</p>
    </div>
    <hr>
    <div class="assinado">
        <img src="../img/assinatura-cadinho.png" alt="">
        <p>______________________________</p>
        <p>Ricardo Carlos de Fraga</p>
        <p>26.439.271/0001-31</p>
        <p>(48) 9 84152125</p>
    </div>
    <div class="divBotão">
            <button id="botao" onclick="window.print()">Imprimir / Salvar</button>
    </div>
</div>



    `;
    }



}