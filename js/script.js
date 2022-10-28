let playernum1 = 0 ;
let playernum2 = 0 ;
let equall = 0;

let goDice = document.querySelector("#go-dice").addEventListener("click" , function(){

    let roundom1 = Math.ceil(Math.random() * 6 ) ;
    let roundom2 = Math.ceil(Math.random() * 6 ) ;
    document.querySelector("#dice1").setAttribute("src" , "./images/" + roundom1 + ".png");
    document.querySelector("#dice2").setAttribute("src" , "./images/" + roundom2 + ".png");
    if(roundom1 > roundom2){
        document.querySelector("#numplayer1").innerHTML= playernum1 = playernum1 + 1 ;
    }
    if(roundom1 < roundom2){
        document.querySelector("#numplayer2").innerHTML= playernum2 = playernum2 + 1 ;
    }
    if(roundom1 == roundom2){
        document.querySelector("#equal").innerHTML= equall = equall + 1 ;
    }
    if(playernum1 == 5){
        alert("player1 win");
        document.querySelector("#numplayer1").innerHTML = playernum1 = 0;
        document.querySelector("#numplayer2").innerHTML= playernum2 = 0 ;
        document.querySelector("#equal").innerHTML= equall = 0 ;
    }
    if(playernum2 == 5){
        alert("player2 win");
        document.querySelector("#numplayer1").innerHTML = playernum1 = 0;
        document.querySelector("#numplayer2").innerHTML= playernum2 = 0 ;
        document.querySelector("#equal").innerHTML= equall = 0 ;
    }
});


