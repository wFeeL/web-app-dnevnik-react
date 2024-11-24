import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp
const puppeteer = require("puppeteer");

function App() {

    useEffect(() => {
    tg.ready();
  })

    async function fetchCookies() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        try {
            console.log("Open Dnevnik...");
            await page.goto("https://dnevnik2.petersburgedu.ru/login", {
                waitUntil: "networkidle2",
            });

            console.log("Wait for authorization...");

            await page.waitForFunction(
                () => document.cookie.includes("X-JWT-Token")
            );

            const cookies = await page.cookies();
            console.log("Success for take cookies");

            await browser.close();

            return cookies;
        } catch (error) {
            console.error("Error:", error.message);
            await browser.close();
        }
    }

    const onClickButton = () => {
        tg.close()
    }

    const authorizeUser = async () => {
        const cookies = await fetchCookies();
        alert(cookies)
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
