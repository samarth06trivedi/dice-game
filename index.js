let p1 = Math.floor(Math.random()*5 + 1);
let p2 = Math.floor(Math.random()*5 + 1);

/* playr 1 */
if(p1==2){
    document.querySelector(".dice1").setAttribute("src","./dice2.png");
}
if(p1==3){
    document.querySelector(".dice1").setAttribute("src","./dice3.png");
}

if(p1==4){
    document.querySelector(".dice1").setAttribute("src","./dice4.png");
}
if(p1==5){
    document.querySelector(".dice1").setAttribute("src","./dice5.png");
}
if(p1==6){
    document.querySelector(".dice1").setAttribute("src","./dice6.png");
}

/* player 2 */

if(p2==2){
    document.querySelector(".dice2").setAttribute("src","./dice2.png");
}
if(p2==3){
    document.querySelector(".dice2").setAttribute("src","./dice3.png");
}

if(p2==4){
    document.querySelector(".dice2").setAttribute("src","./dice4.png");
}
if(p2==5){
    document.querySelector(".dice2").setAttribute("src","./dice5.png");
}
if(p2==6){
    document.querySelector(".dice2").setAttribute("src","./dice6.png");
}

/* title */

if(p1>p2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}

if(p2>p1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}

if(p2==p1){
    document.querySelector("h1").innerHTML = "Draw!";
}
