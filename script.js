
let baseArray = ["bobrossparrot.gif", "explodyparrot.gif","fiestaparrot.gif", "metalparrot.gif", 
"revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let cardsArray = [];
let contadorDeJogadas = 0;
let myInterval;
const cronos = document.querySelector(".timer")
cronos.innerHTML = 00

function dispara(){
  myInterval = setInterval(function(){
    cronos.innerHTML ++
  }, 1000)
}

function comparador() {
  return Math.random() - 0.5;
}

initial();


function initial() {

  cardsArray = [];
  let container = document.querySelector(".container");
  let greets = Number(prompt(
    "Bem-vindo(a), my precious. Para começar o jogo, escolha a quantidade de cartas que deseja. (de 4 a 14)\nLembre-se: Quanto mais cartas, mais difícil. hehe"
  ));
  cronos.innerHTML = 00
  dispara();
  contadorDeJogadas = 0
  if (greets%2 === 0 && greets >= 4 && greets <= 14){
    for (let i = 0; i < greets/2; i++){
      cardsArray.push(baseArray[i], baseArray[i]);
    } 
    cardsArray.sort(comparador);
    for(let i = 0; i < cardsArray.length; i++){

      container.innerHTML +=
        `<div class="card" data-identifier="card" onclick="turnIt(this)">
          <div class="back face" data-identifier="back-face">
            <img src="./images/front.png" />
          </div>
          <div class="front face" data-identifier="front-face">
            <img src="./images/${cardsArray[i]}" class="${cardsArray[i].replace('parrot.gif', '')}"/>
          </div>
        </div>`
    }
  } else {
    alert("Atente-se à regra!! Você digitou um valor inválido, favor insira um número PAR entre 4 e 14 para iniciar o jogo.")
    initial()
  }
}

function turnIt(element){
  const front = element.querySelector(".front");
  const back = element.querySelector(".back");
  const thisImg = front.querySelector("img");
  const turnedCards = document.querySelectorAll(".turned")

  if (turnedCards.length < 2){   
    front.classList.remove("front")
    back.classList.add("turn")
    element.classList.add("turned")
    contadorDeJogadas += 1
    for (let i = 0; i < turnedCards.length; i++){
      if (thisImg.classList.value === turnedCards[i].querySelector("div:nth-child(2) > img").classList.value){
        element.classList.add("match")
        element.classList.remove("turned")
        turnedCards[i].classList.add("match")
        turnedCards[i].classList.remove("turned")
      } else {
        setTimeout(function (){
          let cont = 0;
          while (cont < turnedCards.length){
            turnedCards[cont].querySelector("div:nth-child(2)").classList.add("front")
            turnedCards[cont].querySelector(".back").classList.remove("turn")
            turnedCards[cont].classList.remove("turned")
            front.classList.add("front")
            back.classList.remove("turn")
            element.classList.remove("turned")
            cont++
          }
        }, 1000);
      }
    }
  } 
  setTimeout(fimDeJogo, 500)
}

function fimDeJogo(){
  let cards = document.querySelectorAll(".card")
  let matchedCards = document.querySelectorAll(".match")
  if (cards.length === matchedCards.length){
    let saveTimer = cronos.innerHTML
    clearInterval(myInterval)
    alert(`OLOCO!! Parabéns, memorizador(a).
    Você ganhou em ${contadorDeJogadas} jogadas!
    Tempo: ${saveTimer}
    SHOW DE BOLINHAS!!!`)
    const restart = prompt("THE PARROTS NEVER ENDS\nGostaria de jogar novamente? (sim ou não)");
    if (restart === "sim"){
      for (let i = 0; i<cards.length; i++){
        cards[i].remove();
      }
      initial();
    } else {
      return
    }
  }
}


function toggle(element){
  const hiddenMenu = element.querySelector("div")
  hiddenMenu.classList.toggle("hiddenButton")

}


