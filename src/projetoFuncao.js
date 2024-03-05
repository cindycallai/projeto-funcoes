let result = hero (150, 50)

function hero(gain, loss){
    let balanceWins = gain - loss
    let level

    if(gain < 10){
        level =  "Ferro"
    } else if (gain >= 10 && gain <= 20){
        level = "Bronze"
    } else if (gain > 20 && gain <= 50){
        level = "Prata"
    } else if(gain > 50 && gain <= 80){
        level = "Ouro"
    } else if (gain > 80 && gain <= 90){
        level = "Diamante"
    } else if (gain > 90 && gain <= 100){
        level = "Lendário"
    } else {
        level = "Imortal"
    }

    console.log(`O herói tem saldo de ${balanceWins} e está no nível ${level}`);

}


