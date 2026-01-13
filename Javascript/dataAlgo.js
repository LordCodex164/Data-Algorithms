var Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count]= value
        this.count++;
    }

    this.pop = function () {
        if(this.count == 0) {
            return undefined
        } 
        this.count--
        var resultToDelete = this.storage[this.count]
        console.log("del", resultToDelete)
        delete resultToDelete
        return resultToDelete
    }

    this.size = function () {
        return this.count
    }

    this.peek = function () {
        return this.storage[this.count-1]
    }
}

var newStack = new Stack()

console.log(newStack)

//creating sets

function mySet() {
    var collection = []
    this.has = function(element){
      return (collection.indexOf(element) !== -1)
    }

    this.values = function(){
        return collection
    }

    this.add = function(element){
      if(this.has(element)) {
        return false
      }
      collection.push(element)
      return true
    }
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element)
            collection.slice(index, 1)
            return true
        }
        return false
    }
    //creating union and intersection of sets
    this.union = function (otherSet) {
        var unionSet = new Set()
        var firstSet = this.values()
        var secondSet = otherSet.values()

        firstSet.forEach(function(e) {
            unionSet.add(e)
        })
        secondSet.forEach(function(e) {
            unionSet.add(e)
        })
        return unionSet
    }

   this.intersection = function(otherSet) {
    var intersectionSet = new Set()
    var firstSet = this.values()

    firstSet.forEach(function(e) {
        if(otherSet.has(e)){
            intersectionSet.add(e)
            return intersectionSet
        }
        return intersectionSet
    })
    return intersectionSet
   }

   this.subset = function(otherSet){
    var firstSet = this.values()

    firstSet.every(function(value) {
        return otherSet.has(value)
    })
   }

}

var newSet = new mySet()

newSet.values()

//creating queues

function Queue () {
    let collection = []
    this.print = function () {
        console.log(collection)
    }
    this.enqueue = function(element){
        collection.push(element)
    }
    this.dequeue = function(){
        collection.shift()
    }
    this.front = function (){
        return collection[0]
    }
    this.size = function (){
        return collection.length
    }
    this.isEmpty = function (){
        return collection.length === 0
    }
}

//creating a priority queue 

function PrioityQueue () {
    var collection = []
    this.printCollection = function(){
        (console.log(collection));
    }
    this.enqueue = function (element){
     if(this.isEmpty){
        collection.push(element)
     }
     else {
        var added = false
        for(let i=0; i<collection.length; i++){
         if(element[1] < collection[i][1]){
            collection.splice(i, 0, element)
            added=true
            break;
         }
        }
        if(!added){
            collection.push(element)
        }
     }
    };
    this.dequeue = function (element){
        let value
        if(!this.isEmpty){
            value = collection.shift()
        }
        return value
    };
    this.front = function () {
        return collection[0]
    }
    this.size = function (){
        return collection.length
    }
}

//binary search tree 


//created a node

class Node {
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//created a binary tree
class BST {
    constructor(){
        this.root = null
    }
    add(data){
        const node = this.root
        if(node === null){
            this.root = new Node(data);
            return;
        } else {
            const searchTree = (node) => {
              if(data < node.data){
                 if(node.left == null){
                    node.left = new Node(data);
                    return;
                 }
                 else if(node.left !== null){
                    return searchTree(node.left);
                 }
              }
              if(data > node.data){
                if(node.right == null){
                    node.right = new Node(data)
                    return;
                }
                else if (node.right !== null){
                    return searchTree(node.right);
                }
              }
              return null
            }
            return searchTree(node)
        }
    }
}

class Node2 {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right
    }
}

class BST2{
    constructor(){
        // inside our bst, we define the root of our tree which is by default null
        this.root = null
    }
    add(data){
        const node = this.root
        if(node == null){
            this.root = new Node(data)
            return;
        }
        else {
            const searchTree = () => {

              if(data < node.data){
                if(node.left === null){
                    node.left = new Node2(data)
                    return;
                }
                else if(node.left !== null){
                    return searchTree(node.left)
                }
              }

              if(data > node.data){
                if(node.right == null){
                    node.right = new Node2(data)
                    return;
                }
                else if(node.right !== null){
                   return searchTree(node.right)
                }
              }

              return null;
            }
            return searchTree(node)
        }
    }
    findMin(){
     let current = this.root;
     while (current !== null){
        current = current.left
     }
      return current.data
    }
    findMax(){
        let current = this.root;
        while(current !== null){
            current = current.right
        }
        return current.data
    }
    isPresent(data){
     let current = this.root
     while(current){
        if(data == current.data){
            return true
        }
        if(data < current.data){
          current = current.left
        }
        else {
            current = current.right
        }
     }
     return false
    }

    remove(data){
        const removeNode = (node, data) => {
          //if we get the actual node to remove
          if(data == node.data){
             //we check if it has left or right children
             if(node.left == null){
                return node.right
             }
             if(node.right == null){
                return node.left
             }
             //if it has two children
             var rlnode = node.right
             while(rlnode.left !== null){
                rlnode = rlnode.left
             }

          
        }
        let newRoot = removeNode(this.root, data)
        this.root = newRoot
    }

    }
} 

//create a node that has data inside it and then a left and right node

class BST3 {
    constructor(){
        this.root = null
    }

    add(data){
        const node = this.root
        if(node == null){
            node = new Node(data)
        }
        else {
            const searchTree = (node) => {
                if(data < node.data){
                    //shift to the left
                    if(node.left !== null){
                        return searchTree(node.left)
                    }
                    else {
                        node.left = new Node(data)
                        return;
                    }
                }
                else if(data > node.data){
                    //shift to the right
                    if(node.right !== null){
                        return searchTree(node.right)
                    }
                    else {
                        node.right = new Node(data)
                        return;
                    }
                } 
            }
            return searchTree(node)
        }
    }
    findMax(){
     //get the current root of our binary tree
     const current = this.root
     if(current.right !== null){
        current = current.right
     }
     else {
        return current.data
     }
    }
    findMin(){
        const current = this.root
        if(current.left !== null){
            current = current.left
        }
        else {
            return current.data
        }
    }
    isPresent(data){
        const current = this.root
        while(current){
        if(data == current.data){
            return true
        }
        else if(data < current.data){
            current = current.left
        }
        else {
            current = current.right
        }
        return false
    }
    }

    remove(data){
        const removeNode = (node, data) => {
            if(node == null){
                return null
            }
            if(data == node.data){
               if(node.left == null && node.right == null){
                return null
               }
               if(node.left == null){
                return node.right
               }
               if(node.right == null){
                  return node.left
               }
               const rNode = node.right
               while(rNode.left !== null){
                rNode = rNode.left
               }
               node.data = rNode.data
               node.right = removeNode(node.right, rNode.data)
            }
            if(data < node.data){
                node.left = removeNode(node.left, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }
    
}

class N {
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
    }
}

class P {
    constructor() {
        this.root = null
    }

    add(data){
     const node  = this.root

     if(node !== null){
        this.root = new N(data)
        return;
     }

     else {
        const searchTree = (node) => {
          if(data < node.data){
            //go to the left
            if(node.left == null) {
               node.left = new N(data)
               return;
            }
            else {
                return searchTree(node.left);
            }
          }
          else if(data > node.data){
            //go to the right
            if(node.right == null){
                node.right = new N(data)
                return;
            }
            else {
                return searchTree(node.right);
            }
          }
        }
        return searchTree(node)
     }
    }

    findMin() {
        let currentNode = this.root
        while(currentNode.left !==null){
            currentNode = currentNode.left;
        }
        return currentNode.data
    }

    findMax(){
        
    }

    removeNode(node, data){
        if(node == null){
            return null
        }
        else {
           if(data == node.data){

            //if it has no children
            if(node.left == null && node.right == null){
                return null
            }
            
            //if it only has a right child
             if(node.left == null){
                return node.right
             }

             //if it only has a left child
             if(node.right == null){
                return node.left
             }

             //if it has two children
             else {
               var rNode = node.right
               while(rNode.left !== null){
                rNode = rNode.left
               }
               //replace the node with that min l1eft child of the right node
               node.data = rNode.data;
               node.right = removeNode(node.right, rNode.data);
               return node;
             }
           }
        }
        this.root = this.removeNode(this.root, data)
    }

}