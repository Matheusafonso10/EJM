// ==========================================
// WHATSAPP - EJM TECH
// ==========================================


// Números que irão receber os clientes
const numerosWhatsApp = [

    "5519995354511",

    "5519991408301",

    "5519989581447"

];



// ==========================================
// ABRIR WHATSAPP
// ==========================================

function abrirWhatsApp() {


    // Sorteia um número entre 0 e 2
    const indice = Math.floor(

        Math.random() * numerosWhatsApp.length

    );


    // Seleciona o número
    const numero = numerosWhatsApp[indice];



    // ======================================
    // MENSAGEM PRONTA
    // ======================================

    const mensagem = encodeURIComponent(

        "Olá! Tudo bem?\n\n" +

        "Encontrei a EJM TECH pelo site e gostaria de solicitar um atendimento.\n\n" +

        "Gostaria de receber mais informações sobre os serviços e solicitar um orçamento.\n\n" +

        "Podem me ajudar?"

    );



    // ======================================
    // CRIA O LINK
    // ======================================

    const link =

        `https://wa.me/${numero}?text=${mensagem}`;



    // Serve para testes no console
    console.log(

        "WhatsApp escolhido:",

        numero

    );



    // ======================================
    // ABRE O WHATSAPP
    // ======================================

    window.location.href = link;

}



// ==========================================
// BOTÃO FINAL
// ==========================================

const botaoWhatsApp =

    document.getElementById("whatsapp-btn");



if (botaoWhatsApp) {


    botaoWhatsApp.addEventListener(

        "click",

        abrirWhatsApp

    );


}


// ======================================
// AVATAR ALEATÓRIO REDES SOCIAIS
// ======================================


const personagensSocial = [


    {

        imagem:"matheus.png",

        mensagem:

        "Eu sou o Matheus! Acompanhe nossos projetos de redes, softwares e tecnologia."

    },


    {

        imagem:"eduardo.png",

        mensagem:

        "Eu sou o Eduardo! Mostramos soluções em eletrônica, elétrica e manutenção."

    },


    {

        imagem:"joao.png",

        mensagem:

        "Eu sou o João! Acompanhe nossos serviços e novidades da EJM TECH."

    },


    {

        imagem:"logo.png",

        mensagem:

        "A EJM TECH conecta tecnologia, elétrica e inovação em soluções reais."

    }


];


setTimeout(()=>{

document.querySelector(
".robo-popup"
).classList.add("mostrar");


},3000);

setTimeout(()=>{

document.querySelector(
".robo-popup"
).classList.add("minimizado");


},9000);