const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const stringOptions = []

const options = $$(".option")

function cpuChoice () {
    return options[Math.floor(Math.random() * options.length)].id
}
const game = $('.game')
const result  = $('.message')
const playGame = (player, cpu) => {
    const resultText  = $('.text')
    const game = $('.game')
    game.classList.add("showresult")
    result.classList.remove("winner")
    result.classList.remove("losser")
    result.classList.remove("empate")
    console.log(player,cpu);
    const winner = win(player,cpu)
    resultText.textContent = winner
    winner === "Empate!" ? result.classList.add("empate") :
    winner === "Ganaste!" ? result.classList.add("winner") : result.classList.add("losser")
}

options.forEach(option => {
    option.addEventListener("click", () => {
        playGame(option.id, cpuChoice())
    })
})

function win(player, cpu) {
    if (player === cpu) return "Empate!";
    const winningCombinations = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    return winningCombinations[player] === cpu ? "Ganaste!" : "Perdiste!";
}


const reset = $(".reset").addEventListener('click', () => {
    game.classList.remove("showresult")
    result.classList.remove("winner")
    result.classList.remove("losser")
    result.classList.remove("empate")
})
