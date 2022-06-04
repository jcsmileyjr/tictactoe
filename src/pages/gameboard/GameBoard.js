import "./gameBoard.css";
import "../../shared/styles.css";
import Square from "../../components/square/square";
import React, { useState} from "react";

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

    const restartGame = () => {
        setGameSpots([false, false, false,false, false, false,false, false, false]);
        setMoves(0);
        setWin(0);
        setTies(0);
        setLosses(0);
    }

    const eraseBoard = () => {
        const interval = setInterval(() => {
            setGameSpots([false, false, false,false, false, false,false, false, false]);
            setMoves(0);
            clearInterval(interval);
          }, 300);
    }

    const aiLogic = () => {
        let combo1 = [{spot: gameSpots[0], value:0}, {spot: gameSpots[1], value:1}, {spot: gameSpots[2], value:2}];
        let combo2 = [{spot: gameSpots[3], value:3}, {spot: gameSpots[4], value:4}, {spot: gameSpots[5], value:5}];
        let combo3 = [{spot: gameSpots[6], value:6}, {spot: gameSpots[7], value:7}, {spot: gameSpots[8], value:8}];
        let combo4 = [{spot: gameSpots[0], value:0}, {spot: gameSpots[3], value:3}, {spot: gameSpots[6], value:6}];
        let combo5 = [{spot: gameSpots[1], value:1}, {spot: gameSpots[4], value:4}, {spot: gameSpots[7], value:7}];
        let combo6 = [{spot: gameSpots[2], value:2}, {spot: gameSpots[5], value:5}, {spot: gameSpots[8], value:8}];
        let combo7 = [{spot: gameSpots[0], value:0}, {spot: gameSpots[4], value:4}, {spot: gameSpots[8], value:8}];
        let combo8 = [{spot: gameSpots[2], value:2}, {spot: gameSpots[4], value:4}, {spot: gameSpots[6], value:6}];
        const combinations = [combo1, combo2, combo3, combo4, combo5, combo6, combo7, combo8];
        let spotPickedbyAI = 10;

        if(moves === 0 && gameSpots[4] === false){
            return spotPickedbyAI = 4;
        }


        combinations.forEach((combo, index) => {
            //if(spotPickedbyAI !== 10) return;
            let count = 0;
            combo.forEach(combination => {
                if(combination.spot === userIcon){
                    count = count + 1;
                }
            })

            if(count === 2){
                const possibleSelection = combo.find(obj => obj.spot === false);
                if(possibleSelection !== undefined){
                    spotPickedbyAI = possibleSelection.value;
                }
            }

        })

        return spotPickedbyAI;
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
        assignSquare(spot, 'player');
        computerSelectSquare();
        setMoves(prevMoves => prevMoves + 1);
        determineWinner();
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
        let aiChoice = aiLogic();
        if(aiChoice !== 10){
            assignSquare(aiChoice, 'computer');
        }else{
            let randomIndex = Math.floor(Math.random() * 9);
            if(gameSpots[randomIndex] === false){
                assignSquare(randomIndex, 'computer');
            }else{
                computerSelectSquare();
            }
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
        if(didPlayerWin){
            setWin(prevWin => prevWin + 1);
            eraseBoard();
        }

        const didComputerWin = winningLogic(computer);
        if(didComputerWin && !didPlayerWin){
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
                    <button onClick={() => restartGame()}>
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
            <section><p>Thank you for playing</p></section>
        </main>
    );
}

export default GameBoard;