const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const stringOptions = []

const options = $$(".option")
const resultText  = $('.text-container')

function cpuChoice () {
    const option = options[Math.floor(Math.random() * options.length)]
    return [option.id, option.textContent] 
}
const game = $('.game')
const result  = $('.message')
const playGame = (player, cpu) => {
    const text  = $('.text')
    const game = $('.game')
    const resultSelection = $$(".result-selection")
    game.classList.add("hideGameOptions")
    resultText.classList.remove("winner", "losser", "empate")
    console.log(player.textContent,cpu[1]);
    const winner = win(player.id ,cpu[0])
    console.log(resultSelection)
    resultSelection[0].textContent = player.textContent
    resultSelection[1].textContent = cpu[1]
    text.textContent = winner
    winner === "Empate!" ? resultText.classList.add("Draw!") :
    winner === "Ganaste!" ? resultText.classList.add("winner") : resultText.classList.add("losser")
    result.classList.add('showResult')
}

options.forEach(option => {
    option.addEventListener("click", () => {
        playGame(option, cpuChoice())
    })
})

function win(player, cpu) {
    if (player === cpu) return "Draw!";
    const winningCombinations = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    return winningCombinations[player] === cpu ? "You won!" : "You lost";
}


const reset = $(".reset").addEventListener('click', () => {
    game.classList.remove("hideGameOptions")
    result.classList.remove('showResult')
    resultText.classList.remove("winner", "losser", "empate")
})
