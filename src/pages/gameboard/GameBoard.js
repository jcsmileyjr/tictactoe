import "./gameBoard.css";
import "../../shared/styles.css";
import Square from "../../components/square/square";


const GameBoard = ({userIcon}) => {
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
                    <Square icon="blank"/>
                    <Square icon="blank"/>
                    <Square icon="blank"/>
                </div>
                <div className="gameboard__row--container">
                    <Square icon="blank"/>
                    <Square icon="blank"/>
                    <Square icon="blank"/>
                </div>
                <div className="gameboard__row--container">
                    <Square icon="blank"/>
                    <Square icon="blank"/>
                    <Square icon="blank"/>
                </div>
            </section>
        </main>
    );
}

export default GameBoard;