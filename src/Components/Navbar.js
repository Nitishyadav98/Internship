import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex"> 
          <li className="mr-6">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="mr-6">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="mr-6">
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li className="mr-6">
            <Link to={'/registration'}>Registration Form</Link>
          </li>
          <li className="mr-6">
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li className="mr-6">
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;