


















let curtains = document.querySelector('.curtains')

let startButton = document.querySelector('.startButton')

let logo = document.querySelector('.logo')

let background = document.querySelector('.background')

let stage1 = document.querySelector('.stage1')

function startGame(){ 



curtains.style.display = 'flex'



setTimeout(() => {



    startButton.style.display = 'none';
    logo.style.display = 'none';

    background.style.display = 'none'



stage1.style.display = 'flex';




  }, 1500);



  setTimeout(() => {

  curtains.style.display = 'none'

  }, 3000);
 

  
}




function returnHome(){ 



  curtains.style.display = 'flex'
  
  
  
  setTimeout(() => {
  

    startButton.style.display = 'block';
    logo.style.display = 'flex';
  
  
    document.querySelector('.background').style.display = 'flex'
  
  stage1.style.display = 'none';
  
  
  
  
    }, 1500);

    
  setTimeout(() => {

    curtains.style.display = 'none'
  
    }, 3000);
  
  
    
  }





let correctColor; 


let cardSet = document.querySelectorAll('.card')

let displayText = document.querySelector('.winningText')



let gameButton = document.querySelector('.boundless')

let cards = document.querySelector('.cards')


display = true;

function begin(){ 

 


if(display){ 


cards.style.transform = 'rotate(360deg)'

display = false;

} else{ 



cards.style.transform = 'rotate(-360deg)'

display = true;


}


for(i = 0; i < cardSet.length; i++){ 


cardSet[i].style.backgroundColor = getRandRgb();





}



let randNumber = Math.floor(Math.random() * cardSet.length)

let winningRgb = cardSet[randNumber].style.backgroundColor


displayText.innerText = winningRgb

correctColor = winningRgb;




}




// console.log(correctAnswer)


let score = JSON.parse(localStorage.getItem('points')) || 0;

document.querySelector('.score').innerText = `Player Score: ${score}`


document.querySelector('.score2').innerHTML = `You won!  <br>
        
Reward: +1 points <br> Your score: ${score} `; 


function determine(nameOfId){ 

 

if(document.querySelector(`${nameOfId}`).style.backgroundColor === correctColor){ 


document.querySelector('.test').style.backgroundColor = correctColor;

console.log(nameOfId)

score++

document.querySelector('.score').innerText = `Player Score: ${score}`

document.querySelector('.score2').innerHTML = `You won!  <br>
        
Reward: +1 points <br> Your score: ${score} `; 

document.querySelector('.victoryWindow').style.display = 'flex';


begin()



} else{ 

alert('Incorrect')



}

localStorage.setItem('points', JSON.stringify(score))


}





function getRandRgb(){ 

  

let r = Math.floor(Math.random() * 255);

let g = Math.floor(Math.random() * 255);

let b = Math.floor(Math.random() * 255);


let result =  `rgb(${r}, ${g}, ${b})`;


return result;




}

// console.log(getRandRgb())






function closeWindow(){ 


document.querySelector('.victoryWindow').style.display = 'none';


}