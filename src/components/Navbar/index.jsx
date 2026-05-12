import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {Moon,Sun,Menu,X} from "lucide-react";



const Navbar = () => {

  const { theme, toggleTheme } = useTheme();
  const [menuOpen,setMenuOpen]=useState(false);
  const navLinks = [
    { label: "Home", target: "hero" },

    { label: "Projects", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "Recommendations", target: "recommendations" },
    { label: "Contact", target: "contact" },

  ]
  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between item-center max-w-7xl mx-auto p-6 ">
        <h1
          className="text-2xl font-bold"
        >V.Reddysekhar
          <span className="text-blue-500"></span>
        </h1>
        {/*Desktop Navigation */}
        <div className=" hidden md:flex items-center gap-6">
          {
            navLinks.map(({ label, target }) =>
              <a
                key={label}
                href={`#${target}`}
                className="transition hover:text-blue-500"
              >
                {label}
              </a>

            )
          }
          {/*Light/Dart Toggle Button */}

           <button
            onClick={toggleTheme}>change mode
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20}/>}
           </button>

        </div>
         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24}/> : <Menu size={24}/>}
         </button>
      </div>
      {/* Mobile Navigation */}
      {
        menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 dark:text-white px-6 py-4 flex flex-col gap-4">
            {
              navLinks.map(({ label, target }) =>
                <a
                  key={label}
                  href={`#${target}`}
                  className="transition hover:text-blue-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>

              )
            }
            <button
              onClick={toggleTheme}
              className="w-fit"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        )
      }
    </nav>

  )
};
export default Navbar;
