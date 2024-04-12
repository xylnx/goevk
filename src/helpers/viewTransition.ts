// TRANSITIONS
// adds and remove a class to/fro a DOM element
const viewTransition = (el: string) => {
  const eventList = document.querySelector(el);
  eventList?.classList.add('viewTrans');
  setTimeout(removeTrans, 600);
};

// remove transition class
function removeTrans() {
  const eventList = document.querySelector('.event-list');
  eventList?.classList.remove('viewTrans');
}

export { viewTransition };
