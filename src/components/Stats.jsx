import '../css/Stats.css';

export default function Stats({streak,best}){
    return(
        <div className='Stats'>
            <Streak streak={streak}/>
            <Best best={best}/>    
        </div>
    )
}

function Streak({streak}){
    return (
        <p>🔥Streak:{streak}</p>
    )
}

function Best({best}){
    return (
        <p>⏱️Best(mins): {best}</p>
    )
}