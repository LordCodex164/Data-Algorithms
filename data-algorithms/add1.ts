 function addUpTo (n: number) {
    let total = 0
    for(let i = 1; i<=n; i++){
        total += i
    }
    return total
 }

 var time1 = performance.now()
 console.log(addUpTo(9000000000))
 var time2 = performance.now()
 console.log(2, time2)
 console.log("time elapsed", `${(time2 - time1)/1000}`, "seconds")