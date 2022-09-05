let board = gameBoard()

function gameBoard() {
    let arr = []
    for (let i = 0; i < 8; i++) {
        arr.push(Array(8).fill(0))
    }
    return arr
}

const knight = (value) => {
    let val = value
    let child = []
    const moves = [
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2]
    ]
    for (let i = 0; i < moves.length; i++) {
        if (val[0] + moves[i][0] < 8 && val[0] + moves[i][0] >= 0
            && val[1] + moves[i][1] < 8 && val[1] + moves[i][1] >= 0) {
            child.push([val[0] + moves[i][0], val[1] + moves[i][1]])
        }

    }

    return [...child, value]
}

const knightMoves = (start, end) => {
    let queue = [start, []]
}






