/*
This app covers the solve game function: once the board is filled.
*/
console.log('app3');
$(() => {
  const solveGameButton = document.getElementById('solveGame');
  const solveOneNumberButton = document.getElementById('solveOneNumber');
  const squares = document.getElementsByClassName('square');

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
      console.log('go 1');
      buildStartArray();
      searchAll();
      // console.log(options);
    } else {
      console.log('go 2');
      removeFoundSquareClass();
      console.log('go 3');
      searchAll();
    }
    // console.log(options);
    return;
  }

  function searchAll() {
    for(let i=9;i>=1;i--){
      searchByBox(boxOptions[`box${i}`]);
      searchByBox(colOptions[`col${i}`]);
      searchByBox(rowOptions[`row${i}`]);
    }
    return;
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
    // console.log(options);
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
    options.forEach((option)=>{
      const y = option.y;
      const thisRow = `row${y}`;
      rowOptions[thisRow].push(option);
      const x = option.x;
      const thisCol = `col${x}`;
      colOptions[thisCol].push(option);
    });
    return;
  }

  function searchByBox(inputBox) {
    // see if any squares in the box have a value, if they do, remove that value from
    // any of the other squares-options' in the box.
    // the same logic will work for rows and cols.
    // console.log('searchByBox',inputBox);
    const usedNumbers = [];
    inputBox.forEach((elem)=>{
      if(elem.value){
        usedNumbers.push(elem.value);
      }
    });
    usedNumbers.sort();
    usedNumbers.reverse();
    inputBox.forEach((elem)=>{
      if(!elem.value){
        usedNumbers.forEach((number)=>{
          number = parseInt(number);
          var index = elem.possibleValues.indexOf(number);
          if(index>=0){
            elem.possibleValues.splice(index, 1);
          }
          if(elem.possibleValues.length===1){
            elem.value = elem.possibleValues[0];
            foundNumber(elem);
          }
        });
      }
    });
    return;
  }

  const foundSquares = [];
  function foundNumber(elem){
    const id = `${elem.x}_${elem.y}`;
    console.log('foundNumber', id, elem.value);
    const square = document.getElementById(id);
    square.classList.add('fixedComp');
    square.innerHTML = elem.value;
    foundSquares.push(square);
    return;
  }

  function  removeFoundSquareClass(){
    console.log('removeFoundSquareClass',foundSquares,foundSquares.length);
    for(let i=0;i<foundSquares.length;i++){
      const square=foundSquares[i];
      console.log(`removing ${square.id}`);
      square.classList.add('fixed');
      square.classList.remove('fixedComp');
    }
  }

});
