import { useState } from "react";
import LogoTi from "../assets/logo.png";
const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState (false);
  const [sidebarDropdownVisible, setSidebarDropdownVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState (false);
  const handleSidebarDropdown = () => {
    setSidebarDropdownVisible(!sidebarDropdownVisible);
   
 };
 const handleSidebar = () => {
  setSidebarVisible(!sidebarVisible);
 
};
const handleDropdown = () => {
  setDropdownVisible(!dropdownVisible);
 
};

  
    return (
        <div>
            <nav className="py-2 px-4 flex items-center
            justify-between">
                <div>
                    <img className="w-[60px] " src={LogoTi} alt="LogoTi" />
                    
                </div>
           
           <div className="hidden mmd:flex m-8 items-center gap-4 justify-center text-1xl">
            <a href="">Home</a>
            <a href="">Kabinet</a>
            <a href="">Tentang</a>
            <div>
                <button className="flex flex-row" onClick={handleSidebarDropdown}>Departement
                <svg
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg id="icons/regular/chevron-up-s">
                <path
                  id="Icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                  fill="currentColor"
                />
              </svg>
            </svg>
                </button>
                {/* List Departement */}
                {dropdownVisible && (
                  <div className="absolute rounded-lg flex flex-col mt-2">
                  <a href="">BPH</a>
                  <a href="">PSDM</a>
                  <a href="">PENRISTEK</a>
                  <a href="">MNB</a>
                  <a href="">KWU</a>
                  <a href="">DEPLU</a>
                  <a href="">DAGRI</a>
                  <a href="">DEPAG</a>
                  <a href="">KOMINFO</a>
                  <a href="">PE</a>


              </div>
                )}
                

                {/* End List Departement */}

            </div>
            
           </div>
           <button className="block sm:hidden pr-2" onClick={handleSidebar}>
        <svg
          className="w-10 h-7 "
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="bar-chart-2">
            <path
              id="Vector"
              d="M20 6L10 6"
              stroke="#F8F9FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M20 12L4 12"
              stroke="#F8F9FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M20 18H14"
              stroke="#F8F9FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>

           {/* Side bar untuk ampilan mobile */}
           {sidebarVisible && (
             
           
           <aside className="h-screen absolute top-0 right-0 bottom-0">
            <div className="h-full border-r shadow-lg bg-white flex flex-col"><button className="flex justify-end mr-2" onClick={handleSidebar}><img
            className="w-[30px] h-[30px]"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4="
                alt=""
              /></button>
              <ul className="text-black mt-10 flex flex-col gap-1 pl-3 pr-10 items-start">
                <li> 
                  <a>Home</a>
                </li>
                <li> 
                  <a>Kabinet</a>
                </li>
                <li> 
                  <a>Tentang</a>
                </li>
                <li>
                  <button className="flex flex-row">Departement <svg
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg id="icons/regular/chevron-up-s">
                <path
                  id="Icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                  fill="currentColor"
                />
              </svg>
            </svg></button>
            {/* List Departement Mobile */}
            {sidebarDropdownVisible && (
              <ul className="ml-2 mt-1 text-sm">
              <li><a>BPH</a></li>
              <li><a>PSDM</a></li>
              <li><a>PENRISTEK</a></li>
              <li><a>MNB</a></li>
              <li><a>KWU</a></li>
              <li><a>DEPLU</a></li>
              <li><a>DAGRI</a></li>
              <li><a>DEPAG</a></li>
              <li><a>KOMINFO</a></li>
              <li><a>PE</a></li>
            </ul>
            )}
            

          
          {/* end List Departement Mobile */}
                  
                </li>
              </ul>
              
              </div>

           </aside>
           )}
           {/* end side bar untuk tampilan mobile */}
           </nav>
        </div>
    );
};

export default Navbar;