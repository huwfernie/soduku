/*
This app covers the solve game function: once the board is filled.
*/
console.log('app3');
$(() => {
  const solveGameButton = document.getElementById('solveGame');
  const solveOneNumberButton = document.getElementById('solveOneNumber');
  const squares = document.getElementsByClassName('square');
  const box1Elements = getBox('box_1');

  function getBox(box){
    let box1 = document.getElementById(box).childNodes;
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
    return box1;
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
  let boxOptions = {};
  const rowOptions = {
    row1: [],
    row2: [],
    row3: [],
    row4: [],
    row5: [],
    row6: [],
    row7: [],
    row8: [],
    row9: []
  };
  const colOptions = {
    col1: [],
    col2: [],
    col3: [],
    col4: [],
    col5: [],
    col6: [],
    col7: [],
    col8: [],
    col9: []
  };
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
    boxOptions = {
      box1: options.slice(0,9),
      box2: options.slice(9,18),
      box3: options.slice(18,27),
      box4: options.slice(27,36),
      box5: options.slice(36,45),
      box6: options.slice(45,54),
      box7: options.slice(54,63),
      box8: options.slice(63,72),
      box9: options.slice(72,81)
    };
    console.log(options);
    options.forEach((option)=>{
      const y = option.y;
      const thisRow = `row${y}`;
      rowOptions[thisRow].push(option);
      const x = option.x;
      const thisCol = `col${x}`;
      colOptions[thisCol].push(option);
    });
    console.log(rowOptions,'rowOptions');
    console.log(colOptions,'colOptions');
    return;
  }

  function searchByBox() {
    // see if any squares in the box have a value, if they do, remove that value from
    // any of the other squares-options' in the box.
    console.log('hello',box1Elements,boxOptions.box1);
    const usedNumbers = [];
    boxOptions.box1.forEach((elem)=>{
      if(elem.value){
        usedNumbers.push(elem.value);
      }
    });
    usedNumbers.sort();
    usedNumbers.reverse();
    boxOptions.box1.forEach((elem)=>{
      if(!elem.value){
        usedNumbers.forEach((number)=>{
          number = parseInt(number);
          var index = elem.possibleValues.indexOf(number);
          if(index>=0){
            elem.possibleValues.splice(index, 1);
          }
        });
      }
    });

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
