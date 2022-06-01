import "./gameBoard.css";
import "../../shared/styles.css";
import Square from "../../components/square/square";
import React, { useState, useEffect } from "react";

/**Notes
 * When the user picks an spot, the computer will randomly select one of the remaining spots.
 * Suggest to use an array with all false from 1-9. When a space is seleted, its spot is
 * updated with a true. The random select choose a spot 1-9, if it's true, then it re-roll.
 */

const GameBoard = ({userIcon}) => {
    const [gameSpots, setGameSpots] = useState([false, false, false,false, false, false,false, false, false]);
    const [moves, setMoves] = useState(0);
    const [wins, setWin] = useState(0);
    const [ties, setTies] = useState(0);
    const [losses, setLosses] = useState(0);

    const eraseBoard = () => {
        setGameSpots([false, false, false,false, false, false,false, false, false]);
    }

    const winningLogic = (icon) => {
        let win = false;
        if(gameSpots[0] === icon && gameSpots[1] === icon && gameSpots[2] === icon){
            win = true;
        }else if(gameSpots[3] === icon && gameSpots[4] === icon && gameSpots[5] === icon){
            win = true;
        }else if(gameSpots[6] === icon && gameSpots[7] === icon && gameSpots[8] === icon){
            win = true;
        }else if(gameSpots[0] === icon && gameSpots[3] === icon && gameSpots[6] === icon){
            win = true;
        }else if(gameSpots[1] === icon && gameSpots[4] === icon && gameSpots[7] === icon){
            win = true;
        }else if(gameSpots[2] === icon && gameSpots[5] === icon && gameSpots[8] === icon){
            win = true;
        }else if(gameSpots[0] === icon && gameSpots[4] === icon && gameSpots[8] === icon){
            win = true;
        }else if(gameSpots[2] === icon && gameSpots[4] === icon && gameSpots[6] === icon){
            win = true;
        }else {
            win = false;
        }

        return win;
    }

    const playerSelectSquare = (spot) => {
        //console.log(`Player select spot `, spot);
        assignSquare(spot, 'player');
        computerSelectSquare();
        setMoves(prevMoves => prevMoves + 1);
        determineWinner();
        console.log('Wins ', wins);
        console.log('Losses: ', losses);
        console.log('Ties ', ties);
        console.log('Moves ', moves);
        //console.table(gameSpots);
    }
    
    /**
     * checks if the player has assign a square and if so, assign it the icon choosen. If not the player, 
     * then assign the opposite icon as the computer.
     * */
    const assignSquare = (spot, player) => {
        let gameBrackets = gameSpots;
        player==='player'?gameBrackets[spot]= userIcon:userIcon === 'X'?gameBrackets[spot]='O':gameBrackets[spot]='X';
        setGameSpots(gameBrackets);
    }

    const computerSelectSquare = () => {
        let randomIndex = Math.floor(Math.random() * 9);
        //console.log(`Random number is `, randomIndex);
        if(gameSpots[randomIndex] === false){
            assignSquare(randomIndex, 'computer');
        }else{
            //console.log(`Re-roll `, randomIndex);
            computerSelectSquare();
        }
    }
    
    const determineWinner = () => {
        const didPlayerWin = winningLogic(userIcon);
    
        let computer = 'blank';
        if(userIcon === "X"){
            computer = "O";
        }else{
            computer = "X";
        }

        const didComputerWin = winningLogic(computer);

        if(didPlayerWin){
            setWin(prevWin => prevWin + 1);
            eraseBoard();
        }

        if(didComputerWin){
            setLosses(prevLosses => prevLosses + 1);
            eraseBoard();
        }

        if(moves === 3 && !didComputerWin && !didPlayerWin){
            setTies(prevTies => prevTies + 1);
            eraseBoard();
        }
        
    }

    return(
        <main className="page__container">
            <h1 className=" gameBoard--title__style darkGrayColor">Tic Tac Toe</h1>
            <section className="information--container">
                <div className="information__wins--container">
                    <p>Wins</p>
                    <p>{wins}</p>
                </div>
                <div className="information__ties--container">
                    <p>Ties</p>
                    <p>{ties}</p>
                </div>
                <div className="information__losses--container">
                    <p>Losses</p>
                    <p>{losses}</p>
                </div>
                <div className="information__restart--container">
                    <p>Restart</p>
                    <button>
                        <div className="oIcon--style gameboard__restart--style"></div>
                    </button>
                </div>
            </section>
            <section className="gameboard--container">                
                {gameSpots.map((square, index) => {
                    return (
                        <Square key={index} iconType={square} playerSelection={()=> playerSelectSquare(index)} />
                    )
                })

                }
            </section>
        </main>
    );
}

export default GameBoard;