import "./App.css";
import { useState } from "react";
import logo from "./Screenshot 2023-10-05 172431.png";
import gold from "./Screenshot 2023-10-07 170156.png";
function App() {
  const [counter, setCounter] = useState(0);
  const [money, setMoney] = useState(0);
  const [afterten, setAfterten] = useState(1);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        overflow: "hidden",
        padding: "15%",
      }}
    >
      <div
        style={{
          height: "10%",
        }}
      >
        <img
          style={{
            position: "absolute",
            left: "50px",
            top: "10px",
            width: "25%",
          }}
          src={logo}
        />
        <h1
          style={{
            position: "absolute",
            right: "60px",
            top: "30px",
            padding: "2%",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "70px",
              top: "10px",
            }}
          >
            <img style={{ width: "100px" }} src={gold} />
          </div>
          {money}
          {() => {
            setMoney(money + 1);
          }}
        </h1>
      </div>
      <h2
        style={{
          fontSize: "150px",
          fontFamily: "Roboto",
        }}
      >
        {counter}
      </h2>

      <p1 style={{ fontSize: "100%" }}>Planets Destroyed</p1>
      <div>
        <button
          style={{
            backgroundColor: "#af2121",
            borderRadius: "10px",
            fontSize: "18px",
            margin: "12px 6px",
            padding: "11px 27px",
            cursor: "pointer",
            border: "none",
            boxShadow: "7px 7px #5e1314",
          }}
          onClick={() => {
            setCounter(counter + afterten);
            setMoney(money + 1);
          }}
        >
          Destroy Planet
        </button>
      </div>
      <p2
        style={{
          color: "rgb(96, 105, 134)",
          textAlign: "center",
          marginTop: "10",
        }}
      >
        1 Planet Per Click
      </p2>

      <h3
        style={{
          position: "absolute",
          left: "50px",
          bottom: "200px",
        }}
      >
        Available Upgrades:
      </h3>

      {money >= 10 ? (
        <button
          onClick={() => {
            setAfterten(afterten + 1);
            setMoney(counter - 10);
          }}
          // onClick={() => (gold >= 10 ? gold : "")}
          style={{
            position: "absolute",
            left: "50px",
            bottom: "150px",
            backgroundColor: "#2049a0",
            borderRadius: "10px",
            fontSize: "18px",
            margin: "4px 2px",
            padding: "11px 27px",
            cursor: "pointer",
            border: "none",
            boxShadow: "7px 7px #1b4292",
          }}
        >
          Drink Dark-Side blend coffee
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
