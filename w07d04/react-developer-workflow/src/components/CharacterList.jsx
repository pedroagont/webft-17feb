function CharacterList({ results, loading }) {
  return (
    <section>
      <h3>My favorite characters:</h3>
      <ul>
        {loading && (
          <img
            width="100"
            src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
            alt="loading"
          />
        )}
        {!loading &&
          results.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
      </ul>
    </section>
  );
}

export default CharacterList;
