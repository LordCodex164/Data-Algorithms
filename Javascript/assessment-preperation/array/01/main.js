function createRateLimiter(maxCalls, windowMs) {
    let callCount = 0
    let windowStart = Date.now()

    return function rateLimted(fn) {
        const now = Date.now()
        if ((now - windowStart) > windowMs) {
            callCount = 0;
            windowStart = now;
        }
        if (callCount >= maxCalls) {
            //throw err
        }
        callCount++;
        return fn()
    }
}

//60,000 millisecond -> 5 per 60 secs ( 1 min)
const limiter = createRateLimiter(5, 60000)

limiter(() =>  console.log("new request"))