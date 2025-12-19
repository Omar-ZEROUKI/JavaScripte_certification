const inventory = []

const findProductIndex = (name) => {
  for (let i=0; i<inventory.length; i++){
    if (inventory[i].name.toLowerCase()== name.toLowerCase()){
      return i
    }
  }
  return -1;
}

const findProductIndex2 = (name) => {
  for (let i=0; i<inventory.length; i++){
    if (inventory[i].name.toLowerCase()== name){
      return i
    }
  }
  return -1;
}

const addProduct  = (productObject) => {
  productObject.name= productObject.name.toLowerCase()
  if(findProductIndex(productObject.name) != -1){
    inventory[findProductIndex(productObject.name)].quantity += productObject.quantity;
    console.log(productObject.name + " quantity updated")
  }else{
    
    inventory.push(productObject)
    console.log(productObject.name + " added to inventory")
  }
}

const removeProduct = (productName, quantity) =>{
  let index = findProductIndex(productName); 
  if(index == -1){
    console.log(productName.toLowerCase()+" not found")
  }else if(inventory[index].quantity<quantity){
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`)
  }else if(inventory[index].quantity==quantity){
    inventory.splice(index,1);
  }else{
    inventory[index].quantity-=quantity;
    console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[index].quantity}`)
  }
}

removeProduct("FLOUR", 10)
