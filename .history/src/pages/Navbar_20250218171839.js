const Navbar = () => {
  return (
    <nav>
      <h1>Welcome!</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px"
        }}>New Blog</Link>
      </div>
    </nav>
  );
}