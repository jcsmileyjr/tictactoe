import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import React, {useState} from 'react';

/**Notes
 * For each square within the gameboard, have the X&O component that accepts a 
 * icon parameter. If Player, then visually show its section and vise versa based
 * on the landing page X and O choice. 
 */

/**Notes
 * When the user picks an spot, the computer will randomly select one of the remaining spots.
 * Suggest to use an array with all false from 1-9. When a space is seleted, its spot is 
 * updated with a true. The random select choose a spot 1-9, if it's true, then it re-roll. 
 */
function App() {
  const [userIcon, setUserIcon] = useState(""); // based on user selection from the Landing Page

  const userChooseIcon = (choice) => {
    console.log(choice);
    setUserIcon(choice);
  } 

  return (
    <div className="App">
      <LandingPage chooseIcon={userChooseIcon} />
    </div>
  );
}

export default App;
