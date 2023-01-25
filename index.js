import prompt from "prompt-sync";
const cmd = prompt()
const propriedadeCss = (entrada) => {
    let saida = []
    while (entrada != "sair") {
        saida.push(entrada);
        entrada = cmd("Insira uma propriedade CSS:")
    }
    let resultado = saida.sort().join("\n")
    console.log(resultado)
    
}
propriedadeCss()


