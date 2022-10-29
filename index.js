let botCount = 0, humanCount = 0, i = 1;
// if rock
function rock(){
    humanRound(2);
}

// if paper
function paper(){
    humanRound(0);
}

// if scissor
function scissor(){
    humanRound(1);
}

function humanRound(val){ 
    playRound(val);
}

function choice(val){
    if(val === 0){
        return"images/paper.svg";
    }else if(val === 1){
        return"images/scissor.svg";
    }else{
        return"images/stone.svg";
    }
}

function playRound(val){
    
    const human = val;
    
    const bot = parseInt(Math.random()*3);

    document.querySelector(".human-choice").src = choice(human);
    document.querySelector(".bot-choice").src = choice(bot);


    // 0 is paper, 1 is scissor and 2 is rock
    
    if(bot === 0 && human ===  2){
        botCount++;
    }else if(bot === 2 && human ===  0){
        humanCount++;
    }else if(bot > human){
        botCount++;
    }else if(bot < human){
        humanCount++;
    }

    console.log(botCount, humanCount);
    
    //end the game
    if(i < 5){
        document.querySelector(".round-left-check").innerHTML= 5 - i;
        i++;
    }
    else if(i === 5){
        document.querySelector(".round-left-check").innerHTML= 0;
        document.querySelector(".choose-hide").classList.add("hide");
        document.querySelector(".remove-hide").classList.remove("hide");
    }else{
        document.querySelector(".main").classList.add("hide");
        document.querySelector(".game-over").classList.remove("hide");
        if(humanCount > botCount){
            document.querySelector(".game-over-p").innerHTML= `You won ${humanCount} by ${botCount}`;
        }else if(humanCount < botCount){
            document.querySelector(".game-over-p").innerHTML= `Bot won ${botCount} by ${humanCount}`;
        }else{
            document.querySelector(".game-over-p").innerHTML= "Draw!!!";
        }
    }
}
function incrementTheI(){
    i++;
    playRound();
}