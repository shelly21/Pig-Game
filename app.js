var scores,roundScore,activePlayer,gameplaying;

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying=true;

    document.querySelector("#dice1").style.display = "none";
    document.querySelector("#dice2").style.display = "none";

    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent ='0';

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

init();

var diceThrow,finalScore;

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gameplaying){
        var dice1 = Math.floor( Math.random() * 6) + 1;
        var dice2 = Math.floor( Math.random() * 6) + 1;

        document.getElementById('dice1').style.display='block';
        document.getElementById('dice2').style.display='block';
        
        document.getElementById('dice1').src = 'dice-' + dice1+ '.png';
        document.getElementById('dice2').src = 'dice-' + dice2+ '.png';

         if(dice1 !== 1 && dice2 !== 1){
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
       }
       else{
             nextPlayer();
       }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplaying){
        var winningScore;
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        finalScore = document.querySelector('.number').value;
        if(finalScore){
            winningScore=finalScore;
        }
        else{
            winningScore = 100;
        }
        if(scores[activePlayer] >= winningScore){
               document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
               document.getElementById('dice1').style.display='none';
               document.getElementById('dice2').style.display='none';
               document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
               document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
               gameplaying=false;
        }
        else{
            nextPlayer();
        }
    }  
});

function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

             document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active');

             document.getElementById('dice1').style.display='block';
             document.getElementById('dice2').style.display='block';

}

document.querySelector('.btn-new').addEventListener('click', init);