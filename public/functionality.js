document.getElementById('submitBtn').addEventListener("click",
    async (event) => {
    let dogs = await getDogs()

    })

async function getDogs() {
    try {
        let response = await fetch("https://localhost:3000/api/dogs")
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}