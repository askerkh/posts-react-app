import { useState } from "react";
import Button from "./UI/button/Button"

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className="mt-2 flex flex-col gap-4 items-center">
      <h1 className="text-3xl text-green-400 shadow-xl rounded w-12 h-12 flex justify-center items-center">{count}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter;
