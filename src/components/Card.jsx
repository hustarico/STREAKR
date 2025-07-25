import { useEffect, useState } from "react"
import "../css/Card.css"
import EndDayButton from "./EndDayButton"
import ResetButton from "./ResetButton";


export default function Card({streak,setStreak,best,setBest}){

    const [todayTime,setTodayTime]= useState(Number(localStorage.getItem("todayTime"))||0);
    const [input,setInput] = useState("");

    function parse(input){
        let num =Number(input); 
        if(isNaN(num)){
            alert("input must be a number")
            num=0;
        }
        setTodayTime(prev =>(Math.max(prev+num,0)));
        
    }

    useEffect(function(){
        localStorage.setItem("todayTime",todayTime);
    },[todayTime]);


    return (
        <div className="Card">
            <p>total time studied today</p>
            <p className="todayTime">{todayTime}</p>
            <p>mins</p>

            <form action="none" onSubmit={e => {e.preventDefault();parse(input);setInput("");}}>
                <input type="text" value={input} onChange={e => {setInput(e.target.value);}}/>
                <input type="submit" value="add"/>
            </form>
                <EndDayButton 
                    streak = {streak} setStreak={setStreak}
                    best = {best} setBest={setBest} 
                    input = {input} setInput={setInput} 
                    todayTime = {todayTime} setTodayTime={setTodayTime}/>

                <ResetButton state={streak} setter={setStreak} name={"streak"}/>
                
                <ResetButton state={best} setter={setBest} name={"best"}/>

                <p>Website made by <a href="https://hussamtarteer.netlify.app" target="_blank">hustarico</a>!</p>
                
        </div>
    )
}

