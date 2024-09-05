import { useState } from "react";


export default function InputBox({label, value, handleInputChange}) {
   const [clicked, setClicked] = useState(false);

    function handleInputChanges(event){
        var newInput = event.target.value;
        handleInputChange(newInput, label);
    }

    function handleInitialClick() {
        // If the input box hasn't been clicked before, clear the value
        if (!clicked) {
            setClicked(true);
            handleInputChange('', label);
        }
    }

    return (
        <div>
            <label>{label}</label>
            <input 
                type="number"
                required
                value={value}
                onClick={handleInitialClick}
                onChange={handleInputChanges}
            ></input>
        </div>
    )
}