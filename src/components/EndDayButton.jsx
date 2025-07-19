export default function EndDayButton({streak,setStreak,best,setBest,input,setInput,todayTime,setTodayTime}){
    
    function endDay(){
        if(todayTime>0){
            setStreak(prev=>prev+1);
            setInput("");
            setTodayTime(0);

            setBest(Math.max(best,todayTime));
        }
    }

    return (
        <button onClick={endDay}>End day</button>
    )
}