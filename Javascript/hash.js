/* it takes a key input and  then it runs through an hash function
a hsh function just maps strings to numbers
 it is very important for an hsh function to be very consistent such thaat when it receives a key, it 
 reurns the same  number,
*/ 
var hash = (string, max) => {
    var hash = 0
    for(var i = 0; i < string.length; i++){
        hash += string.charCodeAt(i)
        console.log("h", hash)
    }
    return hash % max;
    //here we will be returning the index that we will be using to place the items(key, value) into the array.
}

console.log(hash("quincy", 5))

var hash2 = (string, max) => {
  let hash = 0
  for(let i = 0; i< string.length; i++){
    hash += string.charCodeAat(i)
  }
  return hash % max
}

let hashTable = function (){
    let storage = []  
    const storageLimit = 4;

    this.print = function (){
        console.log(storage)
    }

    //in this case index is 0
    //[ 
    //[ [n d] [n d] ] -> 0
    //[ [n t] [n t] ] 
    //]

    this.add = function (key, value){
     let index = hash(key, storageLimit)
     if(storage[index] === undefined){
        storage[index] = [[key, value]]
     }
     else {
      var modified = false
      for(let i = 0; i< storage[index].length; i++){
            if(storage[index][i][0] == key){
            storage[index][i][1] = value 
            modified = true
            }
     }
     if(modified == false){
        storage[index].push([key, value])
     }
    }
} 


  this.remove = function (key){
    var index = hash(key, storageLimit)
    if(storage[index].length === 1 && storage[index][0][0] == key){
        //delete only the item in the array of the index
       delete storage[index][0]
    }
    else {
        for(let i = 0; i< storage[index].length; i++){
            if(storage[index][i][0] === key){
                delete storage[index][i]
                return;
            }
        }
    }
  }

  this.lookup = function(key){
    var index = hash(key, storageLimit)
    if(storage[index] === undefined){
        return false
    }
    else {
        var isLookUp = false
        for(let i = 0; i< storage[index].length; i++){
            if(storage[index][i][0] === key){
                isLookUp = true;
                return storage[index][i][1]
            }
        }
        if(!isLookUp){
            return false
        }
    }
  }
}

