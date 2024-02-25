let box = Array.from(document.querySelectorAll(".box"));
let newGame = document.querySelector(".new_game");
let winner = document.querySelector(".winner");

let currentPlayer = "X";

let field = Array(9).fill(null);


const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]
function winning() {
    for(const condition of winCombinations) {
        let[a, b, c] = condition;

        if(field[a] && (field[a] == field[b] && field[a] == field[c])) {
            return [a,b,c]
        }
    }
    return false;
}

function startGame() {
    box.forEach(box => box.addEventListener('click', (e) => {
        const id = e.target.id;

        if(!field[id]) {
            field[id] = currentPlayer;
            e.target.innerText = currentPlayer;

            const win = winning();
            if (win) {
                winner.textContent = `Player ${currentPlayer} has won`
                box.forEach(box => box.removeEventListener('click'));
                return;
            }

            currentPlayer = currentPlayer == "X" ? "O" : "X";
        }
    }))
}
startGame();
newGame.addEventListener('click', () => {
    field.fill(null);

    box.forEach(box => {
        box.innerText = '';
    })
    winner.textContent = '';
    currentPlayer = "X";
})
