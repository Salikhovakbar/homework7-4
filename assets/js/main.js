fetch("https://api.spacexdata.com/v3/capsules")
.then(malumot => malumot.json())
.then(data =>{
    data.forEach(e => {
        const tableEl = document.createElement("table")
        const trEl = document.createElement("tr")
        const trElTwo = document.createElement("tr")
        const trElThree = document.createElement("tr")
const tdEl = document.createElement("td")
const tdElTwo = document.createElement("td")
const tdElThree = document.createElement("td")
const tdElFour = document.createElement("td")
const tdElFive = document.createElement("td")
const tdElSix = document.createElement("td")
const tdElSeven = document.createElement("td")
const tdElEight = document.createElement("td")
const tdElNine = document.createElement("td")
const tdElTen = document.createElement("td")
const tdElEleven = document.createElement("td")
const tdElTwelve = document.createElement("td")
document.body.appendChild(tableEl)
tableEl.appendChild(trEl)
tableEl.appendChild(trElTwo)
tableEl.appendChild(trElThree)
trEl.appendChild(tdEl)
trEl.appendChild(tdElTwo)
trEl.appendChild(tdElThree)
trEl.appendChild(tdElFour)
trElTwo.appendChild(tdElFive)
trElTwo.appendChild(tdElSix)
trElTwo.appendChild(tdElSeven)
trElTwo.appendChild(tdElEight)
trElThree.appendChild(tdElNine)
trElThree.appendChild(tdElTen)
trElThree.appendChild(tdElEleven)
trElThree.appendChild(tdElTwelve)
tdEl.innerHTML = `${e.capsule_serial}`
tdElTwo.innerHTML = `${e.capsule_id}`
tdElThree.innerHTML = `${e.status}`
tdElFour.innerHTML = `${e.original_launch}`
tdElFive.innerHTML = `${e.original_launch_unix}`
tdElSix.innerHTML = `${e.missions}`
tdElSeven.innerHTML = `${e.missions.name}`
tdElEight.innerHTML = `${e.missions.flight}`
tdElNine.innerHTML = `${e.landings}`
tdElTen.innerHTML = `${e.type}`
tdElEleven.innerHTML = `${e.reuse_count}`
tdElTwelve.innerHTML = `${e.details}`

    });
})