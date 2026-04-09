async function getUserActivity(user_id) {
    try {
        const [user, profile, balance] = await Promise.all([
            fetchUser(user_id),
            fetchUserProfie(user_id),
            fetchUserBalance(user_id)
        ])
        //if the promise resolves
        return {user, profile, balance}
    } catch (error) {
        //if the promise rejects
        console.log("error", error)
    }
}

async function getWalletDashboard(wallet_id) {
    try {
        const [wallet, balance] = await Promise.all([
            fetchWallet(wallet_id),
            fetchBalance(wallet_id)
        ])
        //if the promise is resolved 
        return {wallet, balance}
    } catch (error) {
        //if the promise is rejected
        throw new Error("an error occured")
    }
}