import { useEffect, useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Counter from "./Counter";
import CharacterList from "./CharacterList";

import useTitle from '../hooks/useTitle'
import useCounter from '../hooks/useCounter'
import useCharactersData from '../hooks/useCharactersData'

import "../styles/App.css";

function App() {
  const {title, handleChangeHeaderInput} = useTitle()
  const {count, handleClickDecrement, handleClickIncrement} = useCounter()
  const {charactersData} = useCharactersData()

  return (
    <>
      <Header title={title} handleChangeHeaderInput={handleChangeHeaderInput} />
      <Main>
        <Counter
          count={count}
          handleClickDecrement={handleClickDecrement}
          handleClickIncrement={handleClickIncrement}
        />
        <CharacterList 
          results={charactersData.results}
          loading={charactersData.loading}
        />
      </Main>
    </>
  );
}

export default App;
