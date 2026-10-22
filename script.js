const button = document.querySelector(".calculate")

button.addEventListener("click", (e) => {
    const result = document.querySelector(".result")
    const height = Number(document.querySelector(".height").value)
    const weight = Number(document.querySelector(".weight").value)

    if(!height || !weight || isNaN(height) || isNaN(weight)) return result.innerHTML = "Please check your inputs!"

    const bmi = Math.round((weight / (height * height)) * 10000)

    result.innerHTML = `Your BMI is ${bmi}`
})