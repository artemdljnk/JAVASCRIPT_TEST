let form1 = document.getElementById("form1")
let pair = document.getElementById("pair")
let addBtn = document.getElementById("addBtn")
let pairList = document.getElementById("pairList")
let list = document.getElementById("list")
let form2 = document.getElementById("form2")
let sortName = document.getElementById("sortName")
let sortValue = document.getElementById("sortValue")
let deleteBtn = document.getElementById("deleteBtn")

let pairs = []

form1.onsubmit = function (ev) {
    ev.preventDefault()
    let inputValue = pair.value.trim()
    let [name, value] = inputValue.split("=")
    name = name.trim()
    value = value.trim()
    let user = { name, value }
    pairs.push(user)
    pair.value = ""
    renderPairs()
}

function renderPairs() {
    list.innerHTML = ""
    pairs.forEach(pair => {
        let li = document.createElement("li")
        li.textContent = `${pair.name} = ${pair.value}`
        list.appendChild(li)
    })
}

sortName.onclick = function (e) {
    e.preventDefault()
    pairs.sort((a, b) => a.name.localeCompare(b.name))
    renderPairs()
}

sortValue.onclick = function (e) {
    e.preventDefault()
    pairs.sort((a, b) => a.value.localeCompare(b.value))
    renderPairs()
}