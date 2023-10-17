import './Navbar.css' // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Subash Car</h1>
      </div>
      <div className="navbar-links">
        <button>Customize</button>
        <button>View Cars</button>
      </div>
    </nav>
  )
}

export default Navbar
