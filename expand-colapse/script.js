document.addEventListener('click', (e) => {
  if (!e.target.matches('.expand-button')) return
  const card = e.target.closest('.card')
  const cardBody = card.querySelector('.card-body')
  cardBody.classList.toggle('show')
  //   if (e.target.innerText === 'Expand') {
  //     e.target.innerText === 'Colapse'
  //   } else {
  //     e.target.innerText === 'Expand'
  //   }
  // Above refactored
  e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand'
})
