import { useEffect } from "react";

export default function EndDayButton({streak,setStreak,best,setBest,input,setInput,todayTime,setTodayTime}){

    
    function isYesterday(yesterdayDateString){ //string format should be YYYY-MM-DD eg, 2023-06-04 (month and day are 2 chars)

        let todayDateString = getTodayDateString();

        let lastStudyDateString = yesterdayDateString || todayDateString; //falling back to today's string so that it's not yesterday > - <

        let todayDateObj = new Date(todayDateString);
        let lastStudyDateObj = new Date(lastStudyDateString);

        todayDateObj.setHours(0,0,0,0);
        lastStudyDateObj.setHours(0,0,0,0);

        const diffInMs = todayDateObj - lastStudyDateObj;
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        return diffInDays == 1
    }

    function endDay(){
        if(todayTime>0){
            setInput("");
            setTodayTime(0); 
            setBest(Math.max(best,todayTime));
            localStorage.setItem("todayTime",0);
            
            if(isYesterday(localStorage.getItem("lastStudy"))){
                setStreak(prev=>prev+1);
            }else{
                setStreak(1);
            }

            //this line should be after the if-statement
            localStorage.setItem("lastStudy",getTodayDateString());
        }
    }

    function getTodayDateString(){
        let todayDateObj = new Date();
        return `${todayDateObj.getFullYear()}-
                ${String(todayDateObj.getMonth()+1).padStart(2,"0")}-
                ${String(todayDateObj.getDate()).padStart(2,"0")}`.trim();
    }

    useEffect(()=>{
        localStorage.setItem("streak",streak);
        localStorage.setItem("best",best);
    },[streak,best])

    return (
        <button onClick={endDay}>End day</button>
    )
}