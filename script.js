'use strict';
debugger;
let score = 30;
let highscore = 0;
const secretnumber = Math.trunc(Math.random() * 30)  + 1 ;
document.querySelector('.number').textContent = secretnumber ;

document.querySelector('.check').addEventListener('click',function(){
    debugger;
  const guess = Number(document.querySelector('.guess').value) ;
  console.log(guess);

  if(!guess){
    document.querySelector('.message').textContent = 'kuch to input de do yaar';
  }else if(guess === secretnumber){
    document.querySelector('.message').textContent = 'number same aa gya hai ';
    document.querySelector('body').style.backgroundColor = '#FF69B4';
    document.querySelector('.number').style.width = '10rem';
     if(score > highscore){
         highscore = score ;
     }
   
    document.querySelector('.highscore').textContent = highscore ; 
  }else if( guess > secretnumber){
      if( score > 0){
        document.querySelector('.message').textContent = 'jo tum input die ho wo jyada hai';
        score = score - 1 ;
        document.querySelector('.score').textContent = score ;
        document.querySelector('body').style.backgroundColor = '#00FFFF';
        document.querySelector('.number').style.width = '40rem';
      }
        else{
            document.querySelector('.message').textContent = 'You are a looser';
        }
      

  }else if( guess < secretnumber){
    if( score > 0){
    document.querySelector('.message').textContent = 'jo tum input die ho wo kam  hai';
    score = score - 1 ;
    document.querySelector('.score').textContent = score ; 
    document.querySelector('body').style.backgroundColor = '#a9a9a9';
    document.querySelector('.number').style.width = '40rem';
    }
    else{
        document.querySelector('.message').textContent = 'You are a looser';  
    }
  }else if( guess === secretnumber){
    document.querySelector('.message').textContent = 'same number aa gya hai EID mubarak';  
    highscore = highscore + 1 ;
    document.querySelector('.highscore').textContent = highscore ; 
  }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = '0';
    document.querySelector('.number').textContent = '0' ;
    document.querySelector('.guess').value = '0' ;
    document.querySelector('.message').textContent = 'ab ayega mazaa ';
    document.querySelector('body').style.backgroundColor = '#696969';
    document.querySelector('.highscore').textContent = highscore ; 
});