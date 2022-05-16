import "./landingPage.css";
import "../../shared/styles.css";
import GameImage from '../../images/game-image.png';

const landingPage = () => {
    return (
        <main className="landingPage--page__container">
            <h1 className="landingPage--title__style darkGrayColor">Let's Play <br/>Tic Tac Toe</h1>
            <img src={GameImage} className="landingPage--promoImage__style" alt="" />
            <section>
                <h2 className="landingPage--instructions__style darkGrayColor">Pick an Icon</h2>
                <div className="landingPage--iconChoice__container">
                    <button className="landingPage--iconOption__container">
                        <div className="xIcon--style"></div>
                    </button>
                    <button className="landingPage--iconOption__container">
                        <div className="oIcon--style"></div>
                    </button>
                </div>
            </section>
            <section>
                <h2 className="darkGrayColor">Play</h2>
                <button>
                    <div className="playIcon--style"></div>
                </button>
            </section>
        </main>
    );
}

export default landingPage;