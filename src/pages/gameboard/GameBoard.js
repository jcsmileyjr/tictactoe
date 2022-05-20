import "./gameBoard.css";
import "../../shared/styles.css";
import Square from "../../components/square/square";
import React, { useState } from "react";

/**Notes
 * When the user picks an spot, the computer will randomly select one of the remaining spots.
 * Suggest to use an array with all false from 1-9. When a space is seleted, its spot is
 * updated with a true. The random select choose a spot 1-9, if it's true, then it re-roll.
 */

const GameBoard = ({userIcon}) => {
    const [gameSpots, setGameSpots] = useState([false, false, false,false, false, false,false, false, false]);

    const selectSquare = () => {
        //console.log(`User icon is `,userIcon);
        return userIcon;
    }

    const playerSelectSquare = (spot) => {
        //console.log(`Player select spot `, spot);
        assignSquare(spot, 'player');
        computerSelectSquare();
        //console.table(gameSpots);
    }
    
    const assignSquare = (spot, player) => {
        let gameBrackets = gameSpots;
        gameBrackets[spot] = player;
        setGameSpots(gameBrackets);
    }

    const computerSelectSquare = () => {
        let randomIndex = Math.floor(Math.random() * 9);
        console.log(`Random number is `, randomIndex);
        if(gameSpots[randomIndex] === false){
            assignSquare(randomIndex, 'computer');
        }else{
            console.log(`Re-roll `, randomIndex);
            computerSelectSquare();
        }
    }

    return(
        <main className="page__container">
            <h1 className=" gameBoard--title__style darkGrayColor">Tic Tac Toe</h1>
            <section className="information--container">
                <div className="information__wins--container">
                    <p>Wins</p>
                    <p>5</p>
                </div>
                <div className="information__ties--container">
                    <p>Ties</p>
                    <p>3</p>
                </div>
                <div className="information__losses--container">
                    <p>Losses</p>
                    <p>2</p>
                </div>
                <div className="information__restart--container">
                    <p>Restart</p>
                    <button>
                        <div className="oIcon--style gameboard__restart--style"></div>
                    </button>
                </div>
            </section>
            <section className="gameboard--container">
                <div className="gameboard__row--container">
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(1)} />
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(2)} />
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(3)} />
                </div>
                <div className="gameboard__row--container">
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(4)} />
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(5)} />
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(6)} />
                </div>
                <div className="gameboard__row--container">
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(7)} />
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(8)} />
                    <Square icon="blank" updateIcon ={selectSquare} playerSelection={()=> playerSelectSquare(9)} />
                </div>
            </section>
        </main>
    );
}

export default GameBoard;