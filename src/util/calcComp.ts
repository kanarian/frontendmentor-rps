export const calcMoveByComputer = () => {
    const min = 1
    const max = 3 + 1
    const computerMove = Math.floor(Math.random() * (max - min) ) + min;
    return fromMoveToString(computerMove)
}

const fromMoveToString = (move: number) => {
    return move === 1 ? "rock" : move === 2 ? "paper" : move === 3 ? "scissors" : "error!"
}

const fromStringToMove = (move: string) => {
    return move === 'rock' ? 1 : move === "paper" ? 2 : move === "scissors" ? 3 : -1
}

export const calcWinner = (userValue: number, computerValue: number) => {
    if (userValue === computerValue){
        return "draw"
    }
    if(
        (userValue===2 && computerValue===1) || 
        (userValue===3 && computerValue===2) ||
        (userValue===1 && computerValue===3))
        { return "user"
    }
    else{
        return "computer"
    }
    
}
