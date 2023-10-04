import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [clickCounter, setClickCounter] = useState(0);
  // const [currency, setCurrency] = useState(0);
  const [upgradeCost, setUpgradeCost] = useState(0);

  const handleButtonClick = () => {};

  const handleUpgradeClick = () => {
    if (clickCounter >= upgradeCost) {
      setClickCounter(clickCounter - upgradeCost);
      setClickCounter(clickCounter + 2);
      setUpgradeCost(-5);
    } else {
      alert("no");
    }
  };

  // const setClickCounter = () => {
  //   if (upgradeCost == 1) {
  //     setCounter(clickCounter + 2);
  //   } else {
  //     setCounter(setCounter + 1);
  //   }
  // };

  // const handleUpgrade = () => {
  //   setUpgrade(1);
  // };

  return (
    <div className="App">
      <div className="currency-div">
        <div className="currency-counter">
          <h2>image</h2>
          <h2>x</h2>
          <h2>counter</h2>
        </div>
      </div>

      <div className="center-div">
        <h1>{clickCounter}</h1>
        <p1>Planets Destroyed</p1>
        <button onClick={handleButtonClick}>Destroy Planet</button>
        {clickCounter >= 10 && (
          <button onClick={handleUpgradeClick}>upgrade</button>
        )}
        <p2>1 Planet Per Click</p2>
      </div>
    </div>
  );
}

export default App;
