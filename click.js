console.clear()
let total = 0
const el = document.querySelector("#count")
window.addEventListener('keydown', e => {
	total++
	el.innerHTML = total + " presses"
})
