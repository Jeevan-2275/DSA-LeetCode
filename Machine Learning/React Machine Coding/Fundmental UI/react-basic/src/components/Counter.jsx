// Counter Application

// Increment, decrement, reset counter
// Disable buttons at min/max values

import { useState} from "react";

const Counter = () => {
    const min_count =-100;
    const max_count=100;
    const [count  ,setCount ] = useState(0);
    
  const increament = () =>{
    if(count < max_count) setCount(count +1);
    }
const decrement = () =>{
    if(count > min_count) setCount(count -1);
}

const reset = () =>{
    setCount(0);
}

return (
    <div>
        <h1>{count}</h1>
              <button onClick={decrement} disabled={count === min_count}> Decrement</button>       

        <button onClick={reset}>Reset </button>
                <button onClick={ increament} disabled={count === max_count}>Increment</button>


    </div>
);};

export default Counter;;