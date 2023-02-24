import React, { useState } from "react";
export default function Hooks() {
  const [conut, setCounter] = useState(0);
  return (
  <>
    <button onClick={() => setCounter(conut-1)}>Click me </button>
<h1>{conut}</h1>
</>
  )
}