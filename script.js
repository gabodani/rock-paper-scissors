let yourScore=0;
let you;
let opponent;
let opponentScore=0;  

const choices=["rock","paper","scissors"];
window.onload=function(){
    for(let i=0;i<3;i++){
        let choice=document.createElement("img");
        choice.id=choices[i];
        choice.src=choices[i]+".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice)
    }
}

function selectChoice(){
    you=this.id;
    document.getElementById("your_choice").src=you+".png";

opponent =choices[Math.floor(Math.random()*3)];
document.getElementById("choice").src=opponent+".png";

if(you==opponent){
    yourScore+=1;
    opponentScore+=1;
}    
else{
    if(you=="rock"){
       if(opponent=="scissors"){
        yourScore+=1;
       }
       else if(opponent=="paper"){
        opponentScore+=1;
       }
    }
     else if(you=="scissors"){
        if(opponent=="paper"){
         yourScore+=1;
        }
        else if(opponent=="rock"){
         opponentScore+=1;
        }
     }
      else if(you=="paper"){
        if(opponent=="rock"){
         yourScore+=1;
        }
        else if(opponent=="scissors"){
         opponentScore+=1;
        }
     }
 } 
 document.getElementById("your_score").innerText=yourScore;
 document.getElementById("score").innerText=opponentScore;
}