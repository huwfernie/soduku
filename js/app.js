/*
This app handles the drag and drop event / event listeners for the number list
*/


$(() => {
  // a boolian - true when a user is draging number 0/clear.
  let dragZero = false;

  /*Add a drag event listener to the list of numbers */
  const allDragObjects = document.getElementsByClassName('drag');
  for(let i=0; i<allDragObjects.length; i++){
    allDragObjects[i].addEventListener('dragstart', handleDragStart, false);
  }

  function handleDragStart(e){
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    if(this.innerHTML==='-'){
      dragZero = true;
    }
  }
  /* End add a drag listener to the list of numbers */

  /*Add an event listener to all the drag targets */
  const allDragTargets = document.getElementsByClassName('square');
  for(let i=0; i<allDragTargets.length; i++){
    allDragTargets[i].addEventListener('dragenter', handleDragEnter, false);
    allDragTargets[i].addEventListener('dragover', handleDragOver, false);
    allDragTargets[i].addEventListener('dragleave', handleDragLeave, false);
    allDragTargets[i].addEventListener('drop', handleDrop, false);
    allDragTargets[i].addEventListener('dragend', handleDragEnd, false);
  }

  function handleDragEnter(e) {
    if(!e.target.classList.contains('fixed') || (e.target.classList.contains('fixedUser') && dragZero)){
      e.target.classList.add('over');
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragLeave(e) {
    if(e.target.classList.contains('over')){
      e.target.classList.remove('over');
    }
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if(!e.target.classList.contains('fixed')){
      this.innerHTML = e.dataTransfer.getData('text/html');
      e.target.classList.add('fixedUser');
    }
    handleDragEnd();
    return false;
  }

  function handleDragEnd() {
    [].forEach.call(allDragTargets, function (col) {
      col.classList.remove('over');
    });
    dragZero = false;
  }
  /*end add an event listener to all the drag targets*/

});
