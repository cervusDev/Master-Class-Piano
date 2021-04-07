# Master Class Piano
 Manipulating the DOM with JavaScript

 # querySelectorAll()
    - Seleciona todos os eventos
    - Utilizar para encapsular um elemento HTML em uma variável JS

# addEventListiner()
    - Escuta um evento, e age por meio deste mesmo evento
        tipos de evento: evento de mouse, teclado, janela ...
    
    estrutura:
        alvo.metodo(evento, ação)

        window.addEventListiner("click", PlayNote )

            note que o tipo de evento é uma string de referência
            enquanto a ação é um objeto JS, no caso uma função

    eventos: 
        - Loads
        - Click
        - Scroll
        - Keydown
        - Charge
        - Submit

# forEach()
    - forEach() percorre todos os itens de um array, tal como um loop for 
    normal, isso se da pois internamente o método possui um loop for

    - Então, ao invés de usar um loop for, utilize um forEach()

    - Além disso o forEach() deve executar uma função dentro de cada 
    elemento do array

Obs: o atributo "data" do documento HTML pode ser acessado no JS sendo
referencido como dataset.valor 
    valor: esse valor, é aquele inserido no atributo do documento HTML

