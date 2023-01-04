import React, { useState } from "react";
import "./App.css";
import Key from "./components/Key";

export default function App() {
  const [displayValue, setDisplayValue] = useState<string[]>(["0"]);
  //oldDisplayValue is a state which saves the previous displayValue to make an operation
  const [oldDisplayValue, setOldDisplayValue] = useState<[number, string]>([
    0,
    "+",
  ]);
  //newDisplay saves a boolean saying if the currentl display value is the result of an operation
  const [newDisplay, setNewDisplay] = useState<boolean>(false);

  //addNumber is a function that adds a digit to the display value
  function addNumber(event?: React.MouseEvent<HTMLButtonElement>): void {
    let key = event?.target as HTMLButtonElement;
    if (displayValue.join("") === "Infinity") {
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
      setDisplayValue([key.innerHTML]);
    } else if (newDisplay) {
      setDisplayValue([key.innerHTML]);
      setNewDisplay(false);
    } else if (displayValue.length >= 16) {
    } else if (
      key.innerHTML === "0" &&
      displayValue.length === 1 &&
      displayValue[0] === "0"
    ) {
      setDisplayValue(displayValue);
    } else if (
      key.innerHTML !== "0" &&
      displayValue.length === 1 &&
      displayValue[0] === "0"
    ) {
      setDisplayValue([key.innerHTML]);
    } else {
      setDisplayValue(displayValue.concat(key.innerHTML));
    }
  }

  //addPoint is used for add a point to the display value, and it checks if a point was already added to the display value
  function addPoint(event?: React.MouseEvent<HTMLButtonElement>): void {
    let point = event?.target as HTMLButtonElement;
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      if (newDisplay) {
        setDisplayValue(["0", "."]);
        setNewDisplay(false);
      }
      if (!displayValue.includes(".")) {
        setDisplayValue(displayValue.concat("."));
      }
    }
  }

  //deleteLastCharacter used for delete the last character as the name of the function says
  function deleteLastCharacter(): void {
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      if (displayValue.length <= 1) {
        setDisplayValue(["0"]);
      } else if (displayValue.length > 1) {
        setDisplayValue(
          displayValue.filter((e, i) => i < displayValue.length - 1)
        );
      }
    }
  }

  //deleteCurrentDisplayVaue is used for delete the current display value being displayed
  function deleteCurrentDisplayValue(): void {
    setDisplayValue(["0"]);
  }

  //deleteAllStoredValue deletes the oldDisplayValue state and the displayValue state
  function deleteAllStoredValue(): void {
    setDisplayValue(["0"]);
    setOldDisplayValue([0, "+"]);
  }

  //This function is used for execute the basic operations
  function operations(event?: React.MouseEvent<HTMLButtonElement>): void {
    let operation = event?.target as HTMLButtonElement;
    if (
      displayValue.join("") === "Infinity" ||
      oldDisplayValue[0] === Infinity
    ) {
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else if (
      displayValue.join("") !== "Infinity" ||
      oldDisplayValue[0] !== Infinity
    ) {
      setOldDisplayValue([oldDisplayValue[0], operation.innerHTML]);
    }
    if (!newDisplay) {
      switch (oldDisplayValue[1]) {
        case "+":
          if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
            alert(
              "The result reached to a Infinity value, All the calculator stored value was reset"
            );
          } else {
            setOldDisplayValue([
              oldDisplayValue[0] + Number(displayValue.join("")),
              operation.innerHTML,
            ]);
            setDisplayValue(
              (oldDisplayValue[0] + Number(displayValue.join("")))
                .toString()
                .split("")
            );
            setNewDisplay(true);
          }
          break;
        case "-":
          if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
            alert(
              "The result reached to a Infinity value, All the calculator stored value was reset"
            );
          } else {
            setOldDisplayValue([
              oldDisplayValue[0] - Number(displayValue.join("")),
              operation.innerHTML,
            ]);
            setDisplayValue(
              (oldDisplayValue[0] - Number(displayValue.join("")))
                .toString()
                .split("")
            );
            setNewDisplay(true);
          }
          break;
        case "X":
          if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
            alert(
              "The result reached to a Infinity value, All the calculator stored value was reset"
            );
          } else {
            setOldDisplayValue([
              oldDisplayValue[0] * Number(displayValue.join("")),
              operation.innerHTML,
            ]);
            setDisplayValue(
              (oldDisplayValue[0] * Number(displayValue.join("")))
                .toString()
                .split("")
            );
            setNewDisplay(true);
          }
          break;
        case "/":
          if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
            alert(
              "The result reached to a Infinity value, All the calculator stored value was reset"
            );
          } else {
            setOldDisplayValue([
              oldDisplayValue[0] / Number(displayValue.join("")),
              operation.innerHTML,
            ]);
            setDisplayValue(
              (oldDisplayValue[0] / Number(displayValue.join("")))
                .toString()
                .split("")
            );
            setNewDisplay(true);
          }
          break;

        default:
          break;
      }
    }
  }

  //It displays the value of the operations
  function equals(): void {
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      switch (oldDisplayValue[1]) {
        case "+":
          setDisplayValue(
            (oldDisplayValue[0] + Number(displayValue.join("")))
              .toString()
              .split("")
          );
          setOldDisplayValue([0, "+"]);
          break;
        case "-":
          setDisplayValue(
            (oldDisplayValue[0] - Number(displayValue.join("")))
              .toString()
              .split("")
          );
          setOldDisplayValue([0, "+"]);
          break;
        case "X":
          setDisplayValue(
            (oldDisplayValue[0] * Number(displayValue.join("")))
              .toString()
              .split("")
          );
          setOldDisplayValue([0, "+"]);
          break;
        case "/":
          setDisplayValue(
            (oldDisplayValue[0] / Number(displayValue.join("")))
              .toString()
              .split("")
          );
          setOldDisplayValue([0, "+"]);
          break;

        default:
          break;
      }
    }
  }

  //It changes the display value to negativo or positive
  function changeSign(): void {
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      setDisplayValue((-Number(displayValue.join(""))).toString().split(""));
    }
  }

  //It raises the current display value to power 2
  function raiseToPower2(): void {
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      setDisplayValue(
        Math.pow(Number(displayValue.join("")), 2)
          .toString()
          .split("")
      );
    }
  }

  //It changes the display value to the square of the current display value
  function squareRoot(): void {
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      setDisplayValue(
        Math.sqrt(Number(displayValue.join("")))
          .toString()
          .split("")
      );
    }
  }

  //It divides one by the current display value
  function divideOneByCurrentDisplayValue(): void {
    setDisplayValue((1 / Number(displayValue.join(""))).toString().split(""));
  }

  //It divides the current display value by 100
  function percentage() {
    if (oldDisplayValue[0] + Number(displayValue.join("")) === Infinity) {
      alert(
        "The result reached to a Infinity value, All the calculator stored value was reset"
      );
      setDisplayValue(["0"]);
      setOldDisplayValue([0, "+"]);
    } else {
      setDisplayValue(
        (Number(displayValue.join("")) / 100).toString().split("")
      );
    }
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="calculator"
        style={{ width: "90vw", maxWidth: "500px", backgroundColor: "#202020" }}
      >
        <span
          className="display"
          style={{
            display: "flex",
            height: "100px",
            maxWidth: "100%",
            flexDirection: "row-reverse",
            alignItems: "center",
            backgroundColor: "#202020",
            color: "#fff",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "40px",
            overflowX: "auto",
            textOverflow: "reverse",
            borderRadius: "10px",
          }}
        >
          {displayValue.join("")}
        </span>
        <div
          className="calculator-keyboard"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(6, 50px)",
            gap: "2px",
          }}
        >
          <Key
            value={"%"}
            handleClick={percentage}
            classname="function-buttons"
          />
          <Key
            value={"CE"}
            handleClick={deleteCurrentDisplayValue}
            classname="function-buttons"
          />
          <Key
            value={"C"}
            handleClick={deleteAllStoredValue}
            classname="function-buttons"
          />
          <Key
            value={"<-"}
            handleClick={deleteLastCharacter}
            classname="function-buttons"
          />
          <Key
            value={"¹/x"}
            handleClick={divideOneByCurrentDisplayValue}
            classname="function-buttons"
          />
          <Key
            value={"x²"}
            handleClick={raiseToPower2}
            classname="function-buttons"
          />
          <Key
            value={"²√x"}
            handleClick={squareRoot}
            classname="function-buttons"
          />
          <Key
            value={"/"}
            handleClick={operations}
            classname="function-buttons"
          />
          <Key value={7} handleClick={addNumber} classname="value-keys" />
          <Key value={8} handleClick={addNumber} classname="value-keys" />
          <Key value={9} handleClick={addNumber} classname="value-keys" />
          <Key
            value={"X"}
            handleClick={operations}
            classname="function-buttons"
          />
          <Key value={4} handleClick={addNumber} classname="value-keys" />
          <Key value={5} handleClick={addNumber} classname="value-keys" />
          <Key value={6} handleClick={addNumber} classname="value-keys" />
          <Key
            value={"-"}
            handleClick={operations}
            classname="function-buttons"
          />
          <Key value={1} handleClick={addNumber} classname="value-keys" />
          <Key value={2} handleClick={addNumber} classname="value-keys" />
          <Key value={3} handleClick={addNumber} classname="value-keys" />
          <Key
            value={"+"}
            handleClick={operations}
            classname="function-buttons"
          />
          <Key value={"+/-"} handleClick={changeSign} classname="value-keys" />
          <Key value={0} handleClick={addNumber} classname="value-keys" />
          <Key value={"."} handleClick={addPoint} classname="value-keys" />
          <Key value={"="} handleClick={equals} classname="equals-button" />
        </div>
      </div>
    </div>
  );
}
