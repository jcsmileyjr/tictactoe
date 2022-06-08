import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import GameBoard from "./pages/gameboard/GameBoard";
import React, { useState } from "react";

/**Notes
 * For each square within the gameboard, have the X&O component that accepts a
 * icon parameter. If Player, then visually show its section and vise versa based
 * on the landing page X and O choice.
 */

function App() {
  const [userIcon, setUserIcon] = useState("X"); // based on user selection from the Landing Page
  const [page, setPage] = useState(0);

  const userChooseIcon = (choice) => {
    setUserIcon(choice);
  };

  const playGame = () => {
    setPage(1);
  };

  return (
    <div className="App">
      {page === 0 && (
        <LandingPage chooseIcon={userChooseIcon} play={playGame} />
      )}
      {page === 1 && <GameBoard userIcon={userIcon} />}
    </div>
  );
}

export default App;
