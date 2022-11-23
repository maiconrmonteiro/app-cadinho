var dataReal = new Date();
    var dia = String(dataReal.getDate()).padStart(2, '0');
    var mes = String(dataReal.getMonth() + 1).padStart(2, '0');
    var ano = dataReal.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    var hora = dataReal.getMinutes()
    var controle = hora + mes + dia

    var logo = window.document.getElementById('logoPrincipal');

    var botao = window.document.getElementById('botao');
    


function gerarRecibo() {
    var campos = window.document.getElementById('campos')
    var valor = window.document.getElementById('valor')
    var extenso = window.document.getElementById('extenso')
    var pagador = window.document.getElementById('pagador')
    var documento = window.document.getElementById('documento')
    var carro = window.document.getElementById('carro')
    var placa = window.document.getElementById('placa')


    var checagem = window.document.getElementsByName('formaPagto')
    var formaPagto = ''

    if (checagem[0].checked){
        formaPagto = ' Via PIX'
    } else if(checagem[1].checked){
        formaPagto = ' Em dinheiro'
    } else if(checagem[2].checked) {
        formaPagto = ' Por cartão'
    }




    campos.innerHTML = (`

    <div class="recibo-pronto">
    <div class="cabecalho">
        <img src="" alt="">
        <h1>Recibo</h1>
        <p>Nº ${controle}</p>
    </div>
    <div class="conteudo-recibo">
        <p class="conteudo">
            Recebi(bemos) de <strong>${pagador.value.toUpperCase()}</strong> - CPF/CNPJ Nº <strong>${documento.value}</strong>, a importancia de <strong>R$ ${valor.value}</strong> (<strong>${extenso.value.toUpperCase()}</strong>) referente ao conserto do carro <strong> ${carro.value.toUpperCase()}</strong> com placa <strong>${placa.value.toUpperCase()}</strong>
        </p>
        <p class="sercicos-realizados">
            Serviços realizados:<br>
            
        </p>
    </div>
    <div class="forma-pagto">
        <p>Pagamento:  <strong>${formaPagto}</strong></p>
    </div>
    <div class="cidade">
        <p>BIGUAÇU, ${dataAtual} </p>
    </div>
    <div class="assinatura">
        <div class="assinatura-cadinho">
            <img src="../src/img/assinatura-cadinho.png" alt="">
        </div>
        <p>____________________________</p><br><br>
        <p>Ricardo Carlos de Fraga</p>
            <p>26.439.271/0001-31</p>
            <p>(48) 9 8415-2125</p>
    </div>

</div>

        `);
        
        campos.style.background = 'hsl(225, 100%, 98%'
        campos.style.color = 'black'
        campos.style.boxShadow = 'none'
        logo.style.display = 'none'
}