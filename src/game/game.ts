export type Gesture = "Rock" | "Paper" | "Scissors";
export const GESTURES: Array<Gesture> = ["Rock", "Paper", "Scissors"];
export type Result = "Player" | "Computer" | "Draw";

interface Summary {
    winner: Result;
    player: Gesture,
    computer: Gesture,
};

const generateComputerGesture = () => RandomGesture();

export const play = (playerGesture: Gesture): Summary => {
    const computerGesture = generateComputerGesture();
    const result = calcResult(playerGesture, computerGesture);
    
    return {winner: result, player: playerGesture, computer: computerGesture};
};

const RandomGesture = (): Gesture => {
    return GESTURES[getRandomInt(GESTURES.length)];
};

export const calcResult = (playerGesture: Gesture, computerGesture: Gesture): Result => {
    /**
     * wins maps winner:loser combos.
     */
    const wins: {[winner: string]: Gesture} = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper"
    }

    if (playerGesture === computerGesture) {
        return "Draw";
    } else {
        return (wins[playerGesture] === computerGesture) ? "Player" : "Computer";
    }
}

const getRandomInt = (max: number): number =>  {
    /*
     * returns: integer number.
     */
    return Math.floor(Math.random() * Math.floor(max));
}