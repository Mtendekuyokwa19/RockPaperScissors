let rock=document.querySelector('#Rock');
let paper=document.querySelector('#Paper');
let scissors=document.querySelector('#Scissors');
let result=document.querySelector('.result')
let points=document.querySelector('.points')
let pointsPlayer=document.querySelector('.pointsPlayer');
let resultPlayer=document.querySelector('.resultPlayer')
let total=0;

function youlose(){

   alert("YOU LOSE!!")
   alert("refresh page to restart game")
    

}
 function play (selection){
    if(total<5)
{
    total++
    points.textContent= total


}

else{
    
   youlose();
    return;
}
    if (selection=="rock"){
       result.textContent="PAPER"
        console.log("paper")
  

    }

    else if(selection=="paper"){

        result.textContent="SCISSORS"
        console.log("scissors")
    

    }
    else if (selection=="scissors"){
        result.textContent="ROCK"

        console.log("rock")
     
    }



}
function play1(){
    play("rock")
    pointsPlayer.textContent=0;
    resultPlayer.textContent="ROCK"
    
}
function play2(){
    pointsPlayer.textContent=0;
    resultPlayer.textContent="PAPER"
    play("paper")
}
function play3(){
    pointsPlayer.textContent=0;
    resultPlayer.textContent="SCISSORS"
    play("scissors")

}





rock.addEventListener('click',play1)
paper.addEventListener('click',play2)
scissors.addEventListener('click',play3)
    