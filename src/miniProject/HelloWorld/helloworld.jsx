/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

function HelloWorld(){
    const [value, setValue] = useState("");
    return(
        <div>
            <div>
                <label>Nhập: </label>
                <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <br/>
            <div>{value}</div>
        </div>
    )
}
export default HelloWorld;