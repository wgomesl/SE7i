// A configuração que será passada ao instanciarmos o objeto Typed
let titulo1sobre = {
    // A lista de frases que aparecerão
    // está string podem conter tags html
    strings: ["Conheça a nossa história!"],
    // A velocidade que é digitado
    typeSpeed: 40,
    showCursor: false
}

// O Objeto precisará recebe 2 parametros,
// 1º: Uma string começando com # para id ou . para classe html
// 2º: o objeto de configuração
let typed = new Typed("#texto", titulo1sobre);
//////////////////////////////////////////////////////////////////////


let titulo3sobre = {
    strings: ["A SE7i é feita por pessoas extraordinárias", 
    "Conheça a equipe que transforma visões em realidade!"],
    typeSpeed: 40,
    loop: true,
    showCursor: false,
}

let typed3 = new Typed("#texto2", titulo3sobre);