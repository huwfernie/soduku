/*
This app covers the solve game function: once the board is filled.
*/
console.log('app3');
$(() => {
  const solveGameButton = document.getElementById('solveGame');
  const solveOneNumberButton = document.getElementById('solveOneNumber');
  solveGameButton.addEventListener('click', ()=>{
    solveGame();
  });
  solveOneNumberButton.addEventListener('click', ()=>{
    solveOneNumber();
  });

  function solveGame(){
    console.log('solveGame');
  }
  function solveOneNumber(){
    console.log('solveOneNumber');
    if(options.length===0){
      buildStartArray();
    } else {
      findANumber();
    }
  }

  const options = [];
  function buildStartArray() {
    const squares = document.getElementsByClassName('square');
    [].forEach.call(squares,(square,index)=>{
      const id = squares[index].id;
      const x = id.split('_')[0];
      const y = id.split('_')[1];
      let possibleValues = [1,2,3,4,5,6,7,8,9];
      let value = null;
      const innerValue = square.innerHTML;
      if(innerValue>=1){
        possibleValues = [innerValue];
        value = innerValue;
      }
      options.push({x,y,possibleValues,value});
    });
  }

  // this isn't working as planned - work on it later.
  // function findANumber() {
  //   const temp = [];
  //   console.log('round 2');
  //   options.forEach((option)=>{
  //     if(option.x==='1'){
  //       temp.push(option);
  //     }
  //     temp.forEach(()=>{
  //
  //     });
  //   });
  // }


});
