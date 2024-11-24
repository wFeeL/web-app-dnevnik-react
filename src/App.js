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
  return (
    <div className="App">
      work
        <button onClick={onClickButton}>Close</button>
    </div>
  );
}

export default App;
