//Define Values
let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNum = 7;

//Define UI Variables
const $game = document.querySelector('#game'),
      $guessBtn = document.querySelector('#guess-btn'),
      $guessInput = document.querySelector('#guess-input'),
      $message = document.querySelector('.message'),
      $minNum = document.querySelector('.min-num'),
      $maxNum = document.querySelector('.max-num');

$minNum.textContent = min;
$maxNum.textContent = max;


$guessBtn.addEventListener('click', function(){
  //check if input is valid
  const guess = parseInt($guessInput.value);
  if(isNaN(guess) || guess > max || guess < min){
    setMessage(`${guess} is incorrect. Must be between ${min} and ${max}.`, 'red');
  }else{
    //if valid
    //WIN
    if(guess === winningNum){
      setMessage(`You WIN! ${guess} is correct.`, 'green');
      $guessInput.disabled = true;
      goAgain();
    }else{
      //not winning num
      guessesLeft--;
      if(guessesLeft > 0){
        setMessage(`Nope. ${guessesLeft} guesses remaining`, 'red');
      }else if(guessesLeft === 0){
        //LOSE
        setMessage(`Game Over, you lose!`, 'red');
        $guessInput.disabled = true;
        goAgain();
      }

    }
  }
})
//define goAgain
const $againBtn = document.querySelector('#again-btn'),
      $againMsg = document.querySelector('.start-over');

function goAgain(){

  $againMsg.style.display = 'block';
  $againBtn.style.display = 'block';

  $againBtn.addEventListener('click', replay)
}

//define replay
function replay(){
  location.reload();
}



//define setMessage(msg, color)
function setMessage(msg, color){
  $message.textContent = msg;
  $message.style.color = color;
  $guessInput.style.borderColor = color;
}
