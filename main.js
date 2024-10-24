// Selfwork Oggetti 1
// Crea un oggetto persona con le seguenti caratteristiche:

//     nome
//     cognome
//     eta'
//     un metodo che permetta di salutare


let persona = {
    nome: "Roberto",
    cognome: "Lacava",
    eta : "48",

    saluta : function(){
        console.log(`Un caro saluto da ${this.nome} ${this.cognome}`);
        
    },
}



persona.saluta();