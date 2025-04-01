function ProductsList(props) {
    const {productsData, loading, handleClickLoadProducts } = props

  return (
    <section>
      <h3>My list of products:</h3>
      <button onClick={handleClickLoadProducts}>Load products</button>
      <ul>
        {loading && <img width="100" src="https://i.gifer.com/ZKZg.gif" alt="loading" />}

        {!loading &&
          productsData.map((product) => <li key={product}>{product}</li>)}
      </ul>
    </section>
  );
}

export default ProductsList;
