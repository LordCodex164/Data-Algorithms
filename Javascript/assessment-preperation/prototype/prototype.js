// function Transaction(amount, status) {
//     this.amount = amount
//     this.status = status
// }

// Transaction.prototype.create = function(status, amount) {
//     console.log(`${amount} has been deducted from your account, your transaction is ${status}`)
// }

// const txn = new Transaction(100, "pending")

// txn.create("successful", 500)


//CODING: Given an array of transactions, write a function to return only successful transactions and sum their amounts.

const txns = [
    {
        name : "txn123",
        status: 'failed',
        amount: 500
    },
    {
        name : "txn235",
        status: 'success',
        amount: 800
    },
    {
        name : "txn345",
        status: 'success',
        amount: 900
    }
]

console.log("txns", txns)

//0(n) using for loop
let total = 0;
for (let i = 0; i < txns.length; i++) {
    let txn = txns[i]
    if (txn.status === "success") {
        total += txn.amount
    }
    else {
        continue
    }
}

console.log("total", total)

//using filter

function sumSuccessTransactions(transactions) {
    return transactions
    .filter(txn => txn.status === "success")
    .reduce((total, txn) => total + txn.amount, 0)
}

console.log("sum", sumSuccessTransactions(txns))

