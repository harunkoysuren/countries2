
const container = document.getElementById("container")
const sorted = countries_data.sort((a,b) => b.population - a.population)

function calcWorldPop(){
    let toplam = 0
    sorted.forEach(country => {
        toplam += country.population
    })
    return toplam
}



for(let i = 0; i<50; i++){
    
    const country = sorted[i]
    const div = document.createElement("div")
    const name = document.createElement("h2")
    const graphic = document.createElement("div")
    const population = document.createElement("p")

    let percent = (country.population / calcWorldPop()) * 100


    name.textContent = country.name
    population.textContent = country.population
    

    div.style.display = "grid"
    div.style.gridTemplateColumns = "150px 1fr 100px"
    div.style.margin = "20px 0px"
    graphic.style.backgroundColor = "orange"
    graphic.style.width = `${percent}%`


    div.appendChild(name)
    div.appendChild(graphic)
    div.appendChild(population)
    



    container.appendChild(div)

}