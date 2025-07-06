 function addUpTo (n: number) {
    let total = 0
    for(let i = 1; i<=n; i++){
        total += i
    }
    return total
 }

 var time1 = performance.now()
 console.log("add1", addUpTo(9000000000))
 var time2 = performance.now()
 console.log("time elapsed", `${(time2 - time1)/1000}`, "seconds")

 function addUpToN (n: number) {
    let total = n * (n + 1)/2
    return total
 }

 var time1_ = performance.now()
 console.log("add2", addUpToN(9000000000))
 var time2_ = performance.now()
 console.log("time elapsed", `${(time2_ - time1_)/1000}`, "seconds")