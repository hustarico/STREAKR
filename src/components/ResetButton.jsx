import { useEffect } from "react";

function ResetButton({state,setter, name }) {

    useEffect(()=>{
        localStorage.setItem(name,state);
    },[state]);

    return (
        <button onClick={()=>{
            setter(0);
        }}>Reset {name}</button>
    );
}

export default ResetButton;