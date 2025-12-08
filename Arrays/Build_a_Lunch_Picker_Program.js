let lunches = []

const addLunchToEnd = (array, string) => {
  array.push(string)
  console.log(`${string} added to the end of the lunch menu.`)
  return array
}

const addLunchToStart  = (array, string) => {
  array.unshift(string)
  console.log(`${string} added to the start of the lunch menu.`)
  return array
}

const removeLastLunch  = (array) => {
  if(array.length == 0){
    console.log("No lunches to remove.")
  }else{
    let lunchItem = array.pop()
    console.log(`${lunchItem} removed from the end of the lunch menu.`)
  }
  return array
}

const removeFirstLunch = (array) => {
  if(array.length == 0){
    console.log("No lunches to remove.")
  }else{
    let lunchItem = array.shift()
    console.log(`${lunchItem} removed from the start of the lunch menu.`)
  }
  return array
}

const getRandomLunch = (array) => {
  if(array.length == 0){
    console.log("No lunches available.")
  }else{
    let randomNumber = Math.round((Math.random())*(array.length-1));
    console.log(`Randomly selected lunch: ${array[randomNumber]}`)
  }
}

const showLunchMenu = (array) => {
  if(array.length > 1){
    console.log(`Menu items: ${array.join(', ')}`)
  }
  else{
    console.log("The menu is empty.")
  }
}
