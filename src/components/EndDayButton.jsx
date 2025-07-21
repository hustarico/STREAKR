export default function EndDayButton({streak,setStreak,best,setBest,input,setInput,todayTime,setTodayTime}){

    
    
    const today = new Date();
    const lastDate = new Date();
    lastDate.setDate(today.getDate()-1);


    // const todayObj = {
    //     day : today.getDate(),
    //     month : today.getMonth(),
    //     year : today.getFullYear()
    // };
    // let lastDateObj ={
    //     day : lastDate.getDate(),
    //     month : lastDate.getMonth(),
    //     year : lastDate.getFullYear()
    // };
    function isYesterday(yesterdayIsoString){
        let date= new Date().toISOString().slice(0,10);
        localStorage.setItem("lastStudy",date.substring(0,8)+"10")
        let next = localStorage.getItem("lastStudy");

        console.log(date);
        console.log(next);
        console.log("--------");

        let dateObj = new Date(date);
        let nextObj = new Date(next);

        dateObj.setHours(0,0,0,0);
        nextObj.setHours(0,0,0,0);

        const diffInMs = dateObj - nextObj;
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        console.log(diffInDays == 1);
        
    }

    function endDay(){
        if(todayTime>=0){
            setStreak(prev=>prev+1);
            setInput("");
            setTodayTime(0);
            setBest(Math.max(best,todayTime));

            isYesterday({},{});
            // console.log(new Date(date).toISOString().slice(0,10));
            // if(JSON.stringify(JSON.stringify(today))==JSON.stringify(lastDate) ){
            //     console.log("true");
            // }else console.log("false")

            
        }
    }

    return (
        <button onClick={endDay}>End day</button>
    )
}