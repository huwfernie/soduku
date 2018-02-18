/*
This app is all about auto filling the game board from the randomGame button
*/
console.log('app2');
$(() => {
  const randomGame = document.getElementById('randomGame');
  randomGame.addEventListener('click', ()=>{
    random();
  });

});

function random(){
  console.log('randomGame');
  // RandomGames is an array of strings, each 9 numbers is a box, the commas are stripped out at a later point.
  const randomGames = ['530600098,070195000,000000060,800400700,060803020,003001006,060000000,000419080,280005079','008000200,300400600,402300591,619000000,004090200,000000915,143,006902,007003005,009000800'];

  const i = 0; //change this for a random number generator later on.
  let game = randomGames[i];

  game = game.replace(/,/g,'');
  console.log('should be 81: ',game.length);
  game = game.split('');

  /*loop through all the squares, add a number to the HTML and a class of fixed to any number > 0.*/
  const squares = document.getElementsByClassName('square');
  game.forEach((elem,index)=>{
    if(elem>0) {
      squares[index].innerHTML = elem;
      squares[index].classList.add('fixed');
    }
  });
}
