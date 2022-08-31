import { useState, useCallback } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("");
  const [backColor, setBackColor] = useState("");

  const pickColor = useCallback((item) => {
    setColor(item);
  }, []);
  const pickBackColor = useCallback((item) => {
    setBackColor(item);
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  document.body.style.backgroundColor = backColor;
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About Us"
          mode={mode}
          pickColor={pickColor}
          pickBackColor={pickBackColor}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div
          className="container my-3"
          style={{ backgroundColor: backColor, color: color }}
        >
          <Routes>
            <Route
             exact path="/"
              element={
                <Textform
                  header="Enter text to analyse below"
                  showAlert={showAlert}
                  mode={mode}
                  color={color}
                  backColor={backColor}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
