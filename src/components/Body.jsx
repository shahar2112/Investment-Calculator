import InputBox from "./InputBox";

export default function Body({inputs, onInputChange}){
    return (
       <div>
            <ol id="user-input" className="input-group">
                {Object.entries(inputs).map(([label, value]) => 
                    <div key={label}>   
                        <InputBox div className="input-group"
                            label={label}
                            value={value}
                            handleInputChange={onInputChange}
                        />
                    </div>
                )}
            </ol>
        </div>
    );
}