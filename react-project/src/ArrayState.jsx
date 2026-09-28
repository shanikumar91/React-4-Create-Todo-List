import { useState } from "react";

// Arrays & State 
export default function ArrayState(){
    let[arr, setArr] = useState(["no moves"]);
//     let updateArr = () => {
//         arr.push("hare Krishna");
//         setArr(arr);
//         console.log(arr);
//     }


    // let updateArr = () => {
    //     arr.push("hare Krishna");
    //     setArr([...arr]);
    //     console.log(arr);
    // }


    // let updateArr = () => {
    //     setArr([...arr, "Radha Krishna"]);
    //     console.log(arr);
    // }

    let updateArr = () => {
        setArr((prevArr)=>{
            return [...prevArr, "Radha Krishna"]});
            console.log(arr);
        
    }
    return(
        <div>
            <p>{arr}</p>
            <button onClick={updateArr}>Push</button>
        </div>
    );
}