import { useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Stats from "./components/Stats"
import "./css/App.css"



export default function App(){

    const [streak,setStreak] = useState(0);
    const [best,setBest] = useState(0);

    return (
        <>
            <Header/>
            <Stats streak = {streak} best = {best}/>
            <div className="card-container">
                <Card
                    streak = {streak} setStreak={setStreak}
                    best = {best} setBest={setBest}                
                />
            </div>
        </>
    )
}