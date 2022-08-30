//counter//

// 1. get the elements 
const counterText = document.querySelector(`#counter`)


const minusBtn = document.querySelector(`#minus-btn`)
const plusBtn = document.querySelector(`#plus-btn`)
const resetBtn = document.querySelector(`#reset-btn`)

//console.log(plusBtn)

let count = 0


//event-handler function when the event happens
const increase = () => {
  count++
  console.log(count)
  counterText.textContent = count
}
const decrease = () => {
  count--
  console.log(count)
  counterText.textContent = count
}
const reset = () => {
  count = 0
  console.log(count)
  counterText.textContent = count
}


// 2. Add event- listener to html element from step-1
minusBtn.addEventListener(`click`,decrease)
plusBtn.addEventListener(`click`,increase)
resetBtn.addEventListener(`click`,reset)



//Theme-Switcher//

//returns a node list that behaves like an  array
const themeBtns = document.querySelectorAll(`.theme-buttons`)


const selectTheme = (evt) => {
  
  const theme = evt.target.textContent

  document.querySelector(`body`).className = theme
  document.querySelector(`main`).className = theme

  const buttons = document.querySelectorAll(`button`)
  
  for (let i=0; i < buttons.length; i++){
    buttons[i].className = theme
  }

}


//console.log(themebtns)
for(let i=0; i<themeBtns.length; i++){
  themeBtns[i].addEventListener(`click`,selectTheme)
}
