
let baseArray = ["bobrossparrot.gif", "explodyparrot.gif","fiestaparrot.gif", "metalparrot.gif", 
"revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let container = document.querySelector(".container")

let cardsArray = [];



function comparador() {
  return Math.random() - 0.5;
}





initial();

function initial() {
  const greets = Number(prompt(
    "Bem-vindo(a), my precious. Para começar o jogo, escolha a quantidade de cartas que deseja. (de 4 a 14)\nLembre-se: Quanto mais cartas, mais difícil. hehe"
  ));

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
          <img src="./images/${cardsArray[i]}" class="${cardsArray[i].replace('parrot.gif', '')}"/>
        </div>
      </div>`
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
    for (let i = 0; i < turnedCards.length; i++){
      if (thisImg.classList.value === turnedCards[i].querySelector("div:nth-child(2) > img").classList.value){
        element.classList.add("match")
        element.classList.remove("turned")
        turnedCards[i].classList.add("match")
        turnedCards[i].classList.remove("turned")

      } else {
        setTimeout(notMatch, 1000);
      }
  
    }




  }

  function notMatch(){
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
  }
  



  
  /*for (let i = 0; i < turnedCards.length; i++){
    if (turnedCards[i].classList.value !== img.classList.value){
      setTimeout(noMatch(), 3000)
    }

  }*/

}







function raise(element){
  const hiddenMenu = element.querySelector("div")
  hiddenMenu.classList.toggle("raise")
  hiddenMenu.classList.toggle("jogadas")

}