// Counter Application

// Increment, decrement, reset counter
// Disable buttons at min/max values

import React,{ useState, useEffect} from "react";

const Counter = () => {
    const [count  ,setCount ] = useState(0);
    const min_count =0;
    const max_count=0;

useEffect(()=>{
    setCount(0);

}
);

return (
    <div>
        <h1>{count}</h1>
        <button disabled={count <= min_count} onClick={() => setCount(count -1)} ></button>
        <button onClick ={() => setCount(0)}>Reset</button>
        <button disabled={count >= max_count} onClick={()=> setCount(count+1)}></button>


    </div>
)
}