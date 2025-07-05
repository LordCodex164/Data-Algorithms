 export function bubbleSort(array: number[]) {
    for(let n = array.length; n >=0;  n--){
      for(let i = 0;  i < n - 1; i++){
        if(array[i] > array[i + 1]) {
            //swap elements
            ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
      }  
    }
    return array
 }

 //before bubbleSorting
 const arr = [2, 1, 5, 3, 4]

 console.log(bubbleSort(arr))

 //length is 5

 //after bubbleSorting

 const bubbArr = [1, 2, 3, 4, 5]


 let arr_ = [5, 1, 2 , 7, 8]

 console.log(arr_[0])

 const normArr = (arr: number[]): number[] => {
    for(let n = arr.length; n>0; n--){
      for(let i = 0; i < n - 1; i++){
        if(arr[i] > arr[i + 1]){
          ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
      }
    }
    return arr
 }

 console.log(normArr(arr_))