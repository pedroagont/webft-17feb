import { useState } from "react";
import "./App.css";

import Header from './components/Header'
import Counter from './components/Counter'
import ProductsList from './components/ProductsList'


function App() {
  let [count, setCount] = useState(0);

  const handleClickDecrement = () => setCount(count - 1);
  const handleClickIncrement = () => setCount(count + 1);

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClickLoadProducts = () => {
    setLoading(true)

    setTimeout(() => {
        const fetchedValues = ["apple", "bananas", "chocolates"];
        setProductsData(fetchedValues);
        setLoading(false)
    }, 2000)
  };

  return (
    <>
      <Header title="Hello from prop!" description="This is an amazing prop!" count={count} />
      <Counter count={count} handleClickDecrement={handleClickDecrement} handleClickIncrement={handleClickIncrement} />
      <ProductsList productsData={productsData} loading={loading} handleClickLoadProducts={handleClickLoadProducts} />
    </>
  );
}

export default App;
