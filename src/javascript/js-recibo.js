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
     

        `);
        
        campos.style.background = 'hsl(225, 100%, 98%'
        campos.style.color = 'black'
        campos.style.boxShadow = 'none'
        logo.style.display = 'none'
}