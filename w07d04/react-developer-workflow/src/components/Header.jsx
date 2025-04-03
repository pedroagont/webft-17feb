function Header({ title, handleChangeHeaderInput }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>Lets learn to create apps 😎</p>
      <input type="text" onChange={handleChangeHeaderInput} value={title} />
    </header>
  );
}

export default Header;
