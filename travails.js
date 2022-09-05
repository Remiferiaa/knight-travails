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
    return [...child]
}

const knightMoves = (start, end) => {
    let queue = [[start]]
    while(queue) {
        let cur = queue.shift()
        let now = knight(cur[cur.length -1])
        for(let i = 0; i < now.length; i++) {
            if(now[i][0] === end[0] && now[i][1] === end[1]){
                cur.push(now[i])
                result(cur)
                return 
            }
            let res = cur.slice(0)
            res.push(now[i])
            queue.push(res)
        }  
    }
}

const result = (res) => {
    console.log(`Achieved in ${res.length-1} moves! Heres the Path Taken:`) 
    for(let i = 0; i <res.length; i++) {
        console.log(res[i])
    }
}

module.exports = knightMoves






