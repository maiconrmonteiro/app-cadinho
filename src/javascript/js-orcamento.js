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
    <div class="conteudo">
        <div class="topo-orcamento">
        <div class="div-logo">
            <img class="logo-orcamento" src="../img/logo.png" alt="Logo Cadinho">
        </div>
    <div id="corpo">
            <div class="cabecalho">
                <h1>Orçamento</h1>
            </div>
            </div>
                
            <div class="data-extenso">
                <p>
                ${arrayDia[Diaa] + ", " + diaa + " de " + arrayMess[Mess] + " de " + anoo}
                <br>
                <br>
                </p>

            </div>
            
            <fieldset class="info-empresa">
                <legend>Martelinho de Ouro</legend>
                <p>Nome Fantasia: Cadinho Martelinho de Ouro </p>
                <p>CNPJ: 26.439.271/0001-31</p>
                <p>Cidade: Biguaçu</p>
                <p>Contato: (48) 9 8475-2125</p>
            </fieldset>
            <fieldset class="info-clientes">
                <legend>Cliente</legend>
                <p>Cliente: ${nome.value}</p>
                <p>Documento: ${documento}</p>
            </fieldset>
            <fieldset class="info-veiculos">
                <legend>Informação do Veiculo</legend>
                <p>Carro: ${carro.value}</p>
                <p>Cor: ${cor.value}</p>
                <p>Placa: ${placa.value}</p>
            </fieldset>
            <fieldset class="info-servicos">
                <legend>Serviços</legend>
                <p>
                Reparo nas peças:
                </p>
                <br>
                    ${servicos1.value} <br>
                    ${servicos2.value} <br>
                    ${servicos3.value} <br>
                    ${servicos4.value}
                </p>
            </fieldset>
            <br>
            <div class="valor-servico">
                <p>
                O valor total do serviço é <strong> R$ ${valor}</strong>
                </p>
                <br>
                <br>
            </div>
            <br>
            <div class="assinatura" >
            <img class="assinatura-caneta" src="../img/assinatura-cadinho.png" alt="Assinatura Cadinho">
                </div>
                <div class="assinatura">
                <p>____________________________</p>
                <p>Ricardo Carlos de Fraga</p>
                <p>26.439.271/0001-31</p>
                <p>(48) 9 8415-2125</p>
        </div>
    </div>
        <div class="btn">
            <button id="botao" onclick="window.print()">Imprimir / Salvar</button>
        </div>
        
        
    </div>

    
    
    
    </div>
    `;
    }



}