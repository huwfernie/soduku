console.log('Hello Huw');


$(() => {
// run this on load!!
  const allDragObjects = document.getElementsByClassName('drag');
  for(let i=0; i<allDragObjects.length; i++){
    allDragObjects[i].addEventListener('dragstart', handleDragStart, false);
  }

  function handleDragStart(){
    console.log('dragstart');
  }

  const allDragTargets = document.getElementsByClassName('square');
  for(let i=0; i<allDragTargets.length; i++){
    allDragTargets[i].addEventListener('dragenter', handleDragEnter, false);
    allDragTargets[i].addEventListener('dragleave', handleDragLeave, false);
  }

  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    e.target.classList.add('over');
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');  // this / e.target is previous target element.
  }

});
