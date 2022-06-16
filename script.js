//INÍCIO BASE DE CÁLCULOS

let baseArray = ["bobrossparrot.gif", "explodyparrot.gif","fiestaparrot.gif", "metalparrot.gif", 
"revertitparrot.gif", "tripletsparrot", "unicornparrot.gif"]

function comparador() {
  return Math.random() - 0.5;
}

//INÍCIO BASE DE CÁLCULOS

initial();

function initial() {
  const greets = Number(prompt(
    "Bem-vindo(a), my precious. Para começar o jogo, escolha a quantidade de cartas que deseja. (de 4 a 14)\nLembre-se: Quanto mais cartas, mais difícil. hehe"
  ));
  let container = document.querySelector(".container")
  let cardsArray = [];

  if (greets%2 === 0 && greets >= 4 && greets <= 14){
    for (let i = 0; i < greets/2; i++){
      cardsArray.push(baseArray[i], baseArray[i]);
    } 
  } else {
    initial()
  }
  cardsArray.sort(comparador);
  for(let i = 0; i < cardsArray.length; i++){

    container.innerHTML +=
      `<div class="card" data-identifier="card" onclick="turnIt(this)">
        <div class="back face" data-identifier="back-face">
          <img src="./images/front.png" />
        </div>
        <div class="front face" data-identifier="front-face">
          <img src="./images/${cardsArray[i]}" />
        </div>
      </div>`
  }
}

function turnIt(element){
  const front = element.querySelector(".front");
  const back = element.querySelector(".back");
  const turnedCards = document.querySelectorAll(".turn")
  
  if (turnedCards.length == 0){
  front.classList.remove("front")
  back.classList.add("turn")
  }
}











function raise(element){
  const hiddenMenu = element.querySelector("div")
  hiddenMenu.classList.toggle("raise")
  hiddenMenu.classList.toggle("jogadas")

}