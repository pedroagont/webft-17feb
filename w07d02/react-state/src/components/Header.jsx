function Header({ title, description, count }) {
  return (
    <header>
      <h1> {title} </h1>
      <h2>Current count: {count}</h2>
      <p>{description}</p>
    </header>
  );
}

export default Header;
