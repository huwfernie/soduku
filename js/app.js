console.log('Hello Huw');


$(() => {
// run this on load!!
  const allDragObjects = document.getElementsByClassName('drag');
  for(let i=0; i<allDragObjects.length; i++){
    allDragObjects[i].addEventListener('dragstart', handleDragStart, false);
  }

  function handleDragStart(e){
    console.log('dragstart');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  const allDragTargets = document.getElementsByClassName('square');
  for(let i=0; i<allDragTargets.length; i++){
    allDragTargets[i].addEventListener('dragenter', handleDragEnter, false);
    // allDragTargets[i].addEventListener('dragover', handleDragOver, false);
    allDragTargets[i].addEventListener('dragleave', handleDragLeave, false);
    allDragTargets[i].addEventListener('drop', handleDrop, false);
    allDragTargets[i].addEventListener('dragend', handleDragEnd, false);
  }

  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    e.target.classList.add('over');
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');  // this / e.target is previous target element.
  }

  function handleDrop(e) {
    // this / e.target is current target element.
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    this.innerHTML = e.dataTransfer.getData('text/html');
    handleDragEnd();
    return false;
  }

  function handleDragEnd() {
    [].forEach.call(allDragTargets, function (col) {
      col.classList.remove('over');
    });
  }

});
