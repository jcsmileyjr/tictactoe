import "./landingPage.css";
import "../../shared/styles.css";
import GameImage from '../../images/game-image.png';

const landingPage = ({chooseIcon}) => {
    return (
        <main className="landingPage--page__container">
            <h1 className="landingPage--title__style darkGrayColor">Let's Play <br/>Tic Tac Toe</h1>
            <img src={GameImage} className="landingPage--promoImage__style" alt="" />
            <section className="landingPage--PickIcon__container">
                <h2 className="darkGrayColor">Pick an Icon</h2>
                <div className="landingPage--iconChoice__container">
                    <button onClick={()=> chooseIcon("X")} className="landingPage--iconOption__container icon--container">
                        <div className="xIcon--style"></div>
                        <div className="xIconRight--style"></div>
                    </button>
                    <button onClick={()=> chooseIcon("O")} className="landingPage--iconOption__container">
                        <div className="oIcon--style"></div>
                    </button>
                </div>
            </section>
            <section>
                <h2 className="darkGrayColor ">Play</h2>
                <button className="landingPage--Play__style">
                    <div className="playIcon--style "></div>
                </button>
            </section>
        </main>
    );
}

export default landingPage;