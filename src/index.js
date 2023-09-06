const baseURL = "http://localhost:3000/pups"

fetch("http://localhost:3000/pups")
    .then((response) => response.json())
    .then((data) => renderPuppers(data))

function renderPuppers(puppers) {
    //console.log(puppers)

    const dogBar = document.querySelector("#dog-bar")
    const dogInfo = document.querySelector("#dog-info")

    puppers.forEach((pup) => {
        //console.log(pup)
        const span = document.createElement("span")
        span.textContent = pup.name
        dogBar.append(span)
        
        span.addEventListener("click", (e) => {
            console.log("Hello there!")
                
            const img = document.createElement("img")
            const h2 = document.createElement("h2")
            const button = document.createElement("button")
        
            img.src = pup.image
            h2.textContent = pup.name
            button.textContent = pup.isGoodDog
        
            dogInfo.append(img, h2, button)
        })
    })
}

// Create new img, h2, and button elements
    // img.src = e.target.image.value , h2.textContent = e.target.name.value , button.textContent = e.target.isGoodDog.value