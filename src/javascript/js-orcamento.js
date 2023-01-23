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

    var carro = window.document.getElementById('carro');
    var cor = window.document.getElementById('cor');
    var placa = window.document.getElementById('placa');

    var servicos1 = window.document.getElementById('servicos1');
    var servicos2 = window.document.getElementById('servicos2');
    var servicos3 = window.document.getElementById('servicos3');
    var servicos4 = window.document.getElementById('servicos4');

    var valor = window.document.getElementById('valor');


    campos.innerHTML = `
    <div class="conteudo">
        <div class="topo-orcamento">
        <div>
            <img class="logo-orcamento" src="../img/logo.png" alt="Logo Cadinho">
        </div>
        <div class="cabecalho">
            <h1>Orçamento</h1>
        </div>
        </div>
            
        
        <fieldset class="info-empresa">
            <legend>Data ${dataAtual}</legend>
            <p>Nome Fantasia: Cadinho Martelinho de Ouro </p>
            <p>CNPJ: 26.439.271/0001-31</p>
            <p>Cidade: Biguaçu</p>
            <p>Contato: (48) 9 8475-2125</p>
        </fieldset>
        <fieldset class="info-clientes">
            <legend>Cliente</legend>
            <p>Cliente: ${nome.value}</p>
            <p>Documento: ${documento.value}</p>
        </fieldset>
        <fieldset class="info-veiculos">
            <legend>Informação do Veiculo</legend>
            <p>Carro: ${carro.value}</p>
            <p>Cor: ${cor.value}</p>
            <p>Placa: ${placa.value}</p>
        </fieldset>
        <fieldset class="info-servicos">
            <legend>Martelinho de Ouro</legend>
            <p
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
            O valor total do serviço é <strong> R$ ${valor.value}</strong>
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
        <div class="btn">
            <button id="botao" onclick="window.print()">Imprimir / Salvar</button>
        </div>
        
        
    </div>

    
    
    
    </div>
    `;



}