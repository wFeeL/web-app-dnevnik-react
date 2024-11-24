import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
    tg.ready();
  })

    const onClickButton = () => {
        tg.close()
    }

    const authorizeUser = async () => {
        await fetch("http://localhost:8000", {
            method: "GET",
        })
    }

  return (
    <div className="App">
      work
        <button onClick={onClickButton}>Close</button>
        <button onClick={authorizeUser}>Authorization</button>
    </div>
  );
}

export default App;
