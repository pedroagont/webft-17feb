import { useState, useEffect } from 'react'

function useTitle(){
  const [title, setTitle] = useState("React Developer Workflow!");
  const handleChangeHeaderInput = (event) => setTitle(event.target.value);

  useEffect(() => {
    document.title = title
  }, [title])

  return { title, handleChangeHeaderInput }
}

export default useTitle;