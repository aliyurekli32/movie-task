import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar