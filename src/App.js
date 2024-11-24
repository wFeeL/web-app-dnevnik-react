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
        alert(1)
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
