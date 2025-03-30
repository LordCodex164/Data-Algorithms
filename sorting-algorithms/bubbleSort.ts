const bubbleSort = (arr:number[]) => {
    for(let n = arr.length; n >= 0; n--){
        for(let i = 0; i < n - 1; i++){
            if(arr[i] > arr[i + 1]){
                ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }
    return arr
}

const arr = [1, 2, 10, 6]

console.log(bubbleSort(arr))