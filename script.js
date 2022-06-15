//INÍCIO BASE DE CÁLCULOS

let baseArray = [
  document.querySelector(".card1"), 
  document.querySelector(".card1"), 
  document.querySelector(".card2"), 
  document.querySelector(".card2"), 
  document.querySelector(".card3"), 
  document.querySelector(".card3"), 
  document.querySelector(".card4"), 
  document.querySelector(".card4"), 
  document.querySelector(".card5"), 
  document.querySelector(".card5"), 
  document.querySelector(".card6"), 
  document.querySelector(".card6"), 
  document.querySelector(".card7"), 
  document.querySelector(".card7")
]

function comparador() {
  return Math.random() -0.5;
}

//INÍCIO BASE DE CÁLCULOS


initial()

function greetings() {
let greets = prompt("Bem-vindo(a), my precious. Para começar o jogo, escolha a quantidade de cartas que deseja. (de 4 a 14)\nLembre-se: Quanto mais cartas, mais difícil. hehe")
return Number(greets)
}

function initial() {
  let greets = greetings()
  let cardsArray = [];
  let contador1 = 0
  let contador2 = 0
  let insert = document.querySelector(".container")
  if (greets%2 === 0 && greets >= 4 && greets <= 14){
    while (contador1 < greets){
      cardsArray.push(baseArray[contador1])
      contador1++
    }
    cardsArray.sort(comparador)
    while (contador2 < cardsArray.length){
      insert.innerHTML = insert.innerHTML + `<div class="card">
      ${cardsArray[contador2].innerHTML}
      </div>`
      contador2++
      }
  } else {
    initial()
  }
}

function flip(){

  //PENSAR COMO FAZER O FLIP INICIAL + FLIP PARA DESVIRAR. 

}
