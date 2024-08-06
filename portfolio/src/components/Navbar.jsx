import {Link, NavLink} from "react-router-dom"
import { socialLinks } from "../constants"
const Navbar = () => {
  return (
   <header className="header">
    <NavLink to="/" className='w-65 h-9 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'>
    <p className="blue-gradient_text">Deepak Yadav</p>

    </NavLink>
    <nav className="flex text-lg gap-7 font-medium">
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

