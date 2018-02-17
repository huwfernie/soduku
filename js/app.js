/*
This app handles the drag and drop event / event listeners for the number list
*/


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
    allDragTargets[i].addEventListener('dragover', handleDragOver, false);
    allDragTargets[i].addEventListener('dragleave', handleDragLeave, false);
    allDragTargets[i].addEventListener('drop', handleDrop, false);
    allDragTargets[i].addEventListener('dragend', handleDragEnd, false);
  }

  function handleDragEnter(e) {
    e.target.classList.add('over');
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
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
