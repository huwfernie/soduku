/*
This app covers the solve game function: once the board is filled.
*/
console.log('app3');
$(() => {
  const solveGameButton = document.getElementById('solveGame');
  const solveOneNumberButton = document.getElementById('solveOneNumber');
  const squares = document.getElementsByClassName('square');
  let box1 = document.getElementById('box_1').childNodes;
  box1 = reduce(box1);
  function reduce(box) {
    box = Array.from(box);
    const badIndexes=[];
    for(let i=0; i<box.length;i++){
      if(box[i].nodeName==='#text'){
        badIndexes.push(i);
      }
    }
    badIndexes.reverse();
    badIndexes.forEach((index)=>{
      box.splice(index,1);
    });
    return box;
  }
  
  solveGameButton.addEventListener('click', ()=>{
    solveGame();
  });
  solveOneNumberButton.addEventListener('click', ()=>{
    solveOneNumber();
  });

  function solveGame(){
    console.log('solveGame');
  }
  /* solveOneNumber will build an array of objects, each object represents a square on The
  board, it will have an x value, y value, an array of possible values, and a final value;

  when the array of possible values is reduced to 1, the final value is set.

  */

  function solveOneNumber(){
    console.log('solveOneNumber');
    if(options.length===0){
      buildStartArray();
      searchByBox();
    } else {
      //findANumber();
    }
  }

  const options = [];
  function buildStartArray() {
    console.log('buildStartArray');
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
    console.log(options);
    return;
  }

  function searchByBox() {
    console.log('hello',box1);
  }

  // this isn't working as planned - work on it later.
  // function findANumber() {
  //   console.log('findANumber');
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
