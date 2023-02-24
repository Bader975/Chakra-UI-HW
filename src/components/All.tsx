import React, { useState } from "react";
 function All() {
    let a=5;
    let b=2;
  const [num1, setnum] = useState<number>(a);
  const [num2, setnum1] = useState<number>(b);
  const [reslut, setreslut] = useState<number>();
  return (
  <div className="cal">
<h1>The result is : {reslut}</h1>
    <button onClick={() => setreslut(num1+num2)}>+</button>
<button onClick={() => setreslut(num1-num2)}>- </button>
<button onClick={() => setreslut(num1*num2)}>x </button>
<button onClick={() => setreslut(num1/num2)}>/ </button>

</div>
  )
}
export default All;