import { useState, useEffect } from 'react'

function useCounter(){
    const [count, setCount] = useState(0);
    const handleClickDecrement = () => setCount((prev) => prev - 1);
    const handleClickIncrement = () => setCount((prev) => prev + 1);
  
    return { count, handleClickDecrement, handleClickIncrement}
}

export default useCounter;