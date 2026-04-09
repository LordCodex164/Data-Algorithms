const transactions = [
    { id: "t1", amount: 500, status: "success" },
    { id: "t2", amount: 200, status: "failed" },
    { id: "t3", amount: 700, status: "success" },
    { id: "t4", amount: 100, status: "pending" },
    { id: "t5", amount: 300, status: "failed" },
  ];


  const groupByTransactions = (txns) => {
    return txns
    .reduce((obj, txn) => {
        if (!obj(txn.status)) {
            obj[txn.status] = []
        }
        else {
            obj[txn.status].push(txn)
        }
    }, {})
  }


  console.log(groupByTransactions(transactions), "group")