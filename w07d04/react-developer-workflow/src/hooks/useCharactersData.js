import { useState, useEffect } from 'react'

function useCharactersData(){
  // const [charactersData, setCharactersData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [charactersData, setCharactersData] = useState({
    results: [],
    loading: false,
  });

  useEffect(() => {
    setCharactersData((prev) => ({ ...prev, loading: true }));

    setTimeout(() => {
      // axios.get('https://swapi.dev/api/people')
      //   .then(data => console.log(data))

      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => {
          // setCharactersData(data.results)
          setCharactersData((prev) => ({ ...prev, results: data.results }));
        })
        .then(() => setCharactersData((prev) => ({ ...prev, loading: false })));
    }, 2000);
  }, []);

  return { charactersData }
}

export default useCharactersData;