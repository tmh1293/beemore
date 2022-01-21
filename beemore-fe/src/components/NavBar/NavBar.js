import {HeaderLayout} from '../Layout'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function NavBar(){

    const { setUser, setStatus } = useAuth();
    
    const Logout = () => {
        setStatus("idle");
        setUser(null)
        localStorage.setItem("token", "");
        setStatus("done");
    }

    const Login = () => {
      console.log("login");
    }

    return(
            <HeaderLayout>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-2xl">Beemore</span>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/about" class="mr-5 hover:text-blue-600 text-bold">
              About
            </Link>
            <Link to="/contact" class="mr-5 hover:text-blue-600 text-bold">
              Contact
            </Link>
          </nav>
          <div className="inline-flex items-center  py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            <div className="flex items-center py-2 -mx-1 md:mx-0">
            <Link
                to="/login"
                className="block w-1/2 px-3 py-2 mx-1 text-md font-medium leading-5 text-center text-blue-500 transition-colors duration-200 transform rounded-md hover:bg-blue-600 hover:text-white md:mx-2 md:w-auto"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-1/2 px-3 py-2 mx-1 text-md font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
              >
                Join free
              </Link>
            </div>
            {/* Show when login successfully */}
            {/* <div className="inline-flex items-center  py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <div class="avatar online">
                <div class="rounded-full w-10 h-10">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
            
      </HeaderLayout>
            
    )
}