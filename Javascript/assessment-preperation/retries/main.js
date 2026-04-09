async function fetchUrlWithRetries(url, retries) {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("an error while fetching")
            }
            return response.json
        } catch (error) {
            console.error("an error occured", error)
            if (attempt == retries) {
                throw new Error("all retries attempt failed")
            }
        }
    }

}

fetchUrlWithRetries("https://test.com", 5)