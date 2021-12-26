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

    return(
        <HeaderLayout>
            <Link to="/">Logo</Link>
            <div>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Search"/>
            </div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/newpost">Create New Post</Link>
            <button onClick={Logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </HeaderLayout>
    )
}