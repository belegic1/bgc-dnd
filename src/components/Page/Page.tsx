import React, { useState } from "react";
import Button from "../Button/Button";

function Page() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  return (
    <div>
      <div>Counter: {counter}</div>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default Page;
