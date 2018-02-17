/*
This app covers the solve game function: once the board is filled.
*/
console.log('app3');
$(() => {
  const solveGame = document.getElementById('solveGame');
  solveGame.addEventListener('click', ()=>{
    solve();
  });

});

function solve(){
  console.log('solveGame');
}
