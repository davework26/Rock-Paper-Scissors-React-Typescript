import * as React from "react";
import {play, GESTURES, Gesture, Result} from "../game/game";

type State = {
    winner: Result;
    player: Gesture,
    computer: Gesture,
    hasPlayed: boolean;
};

export default class Game extends React.Component<{}, State> {
    state = {
        winner: "Draw" as Result,
        player: "" as Gesture,
        computer: "" as Gesture,
        hasPlayed: false,
    };

    play(playerGesture: Gesture) {
        const summary = play(playerGesture);

        this.setState({
            winner: summary.winner,
            player: summary.player,
            computer: summary.computer,
            hasPlayed: true,
        });
    }

    render() {
        return (
            <div>
                <h1>Rock, Paper, Scissors</h1>
                <h2>Make your selection:</h2>
                <div>
                    {GESTURES.map(w => (
                        <button onClick={() => this.play(w)} key={w}>
                            {w}
                        </button>
                    ))}
                </div>
                {this.state.winner && this.state.hasPlayed && (
                    <div>
                        <h3>Player picked: {this.state.player}</h3>
                        <h3>Computer picked: {this.state.computer}</h3>
                        {this.state.winner !== "Draw" && (
                            <h3>Winner: {this.state.winner}!</h3>
                        )}
                        {this.state.winner === "Draw" && <h3>It's a draw!</h3>}
                    </div>
                )}
            </div>
        );
    }
}
