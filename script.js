
initial()

function greetings() {
let greets = prompt("Bem-vindo(a), my precious. Para começar o jogo, escolha a quantidade de cartas que deseja. (de 4 a 14)\nLembre-se: Quanto mais cartas, mais difícil. hehe")
return Number(greets)
}

function initial() {
  let greets = greetings()
  if (greets%2 === 0 && greets >= 4 && greets <= 14){
    
    //EMBARALHAR A QTD DE CARTAS SOLICITADAS E DISTRIBUÍ-LAS NA MESA

  } else {
    initial()
  }

}

