import {Link, NavLink} from "react-router-dom"
import { socialLinks } from "../constants"
const Navbar = () => {
  return (
   <header className="  w-screen  flex justify-between  items-center px-20  h-20 absolute  top-0 bg-transparent z-10 right-0 left-0 mx-auto  ">
    <NavLink to="/" className=' h-9 rounded-lg bg-white flex items-center justify-center font-bold shadow-lg p-1'>
    <p className="blue-gradient_text">Deepak Yadav</p>

    </NavLink>
    <nav className="flex  justify-between items-center text-lg gap-16 font-medium ">
      <NavLink to="/about" className= {( {isActive}) => isActive ? 'text-blue-500':'text-black'}>
      About
      </NavLink>
      
      <NavLink to="/projects" className= {( {isActive}) => isActive ? 'text-blue-500':'text-black'}>
      Projects
      </NavLink>
      {/* <Link  href={socialLinks.github}>
              Github 
            </Link> */}
            <a href="https://github.com/deepak-rao123">Github</a>

    </nav>

   </header>
  )
}

export default Navbar

