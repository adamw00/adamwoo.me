import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return ( 
        <header className="header">
            <NavLink to="/" className="transition ease-in-out duration-500 w-100 h-100 p-5 rounded-lg items-center justify-center flex  hover:bg-ghost"><p className="text-white hover:textShadow">HOME</p></NavLink>
            <NavLink to="/about" className="transition ease-in-out duration-500 w-100 h-100 p-5 rounded-lg items-center justify-center flex  hover:bg-ghost"><p className="text-white">ABOUT</p></NavLink>
            <NavLink to="/projects" className="transition ease-in-out duration-500 w-100 h-100 p-5 rounded-lg items-center justify-center flex  hover:bg-ghost"><p className="text-white">PROJECTS</p></NavLink>
            <NavLink to="/contact" className="transition ease-in-out duration-500 w-100 h-100 p-5 rounded-lg items-center justify-center flex  hover:bg-ghost"><p className="text-white">CONTACT</p></NavLink>
            
        </header>
     );
}

export default Navbar;