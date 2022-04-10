document.getElementById('submitBtn').addEventListener("click",
    async (event) => {
    let dogs = await getDogs()
    console.log(dogs)
    })

async function getDogs() {
    try {
        let response = await fetch("https://localhost:2000/api/dogs")
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}