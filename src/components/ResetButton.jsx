function ResetButton({state,setter, name }) {

    return (
        <button onClick={state=>{
            setter(0)
        }}>Reset {name}</button>
    );
}

export default ResetButton;