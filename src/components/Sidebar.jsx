import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import icon from "../Logo/logo1.jpg"
import {NavLink} from 'react-router-dom'




function Sidebar() {
  return (
    <div className="w-64 bg-purple-950 fixed  h-full px-4 py-2">
        <div className="my-2 mb-9">
            <h1 className="text-2px text-gray-400 font-bold text-2xl p-1 m-2"><img src={icon} alt="" className='w-10 -mt-2 rounded float-start'/>StudyTime
            </h1></div>
    <ul className="mt-3 text-white ">
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/" className="px-3"><DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-2"></DashboardIcon>Dashboard</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/tasks" className="px-3"><LibraryBooksIcon className="inline-block w-6 h-6 mr-2 -mt-2"></LibraryBooksIcon>Set Tasks</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/courses" className="px-3"><LibraryBooksIcon className="inline-block w-6 h-6 mr-2 -mt-2"></LibraryBooksIcon>Your Courses</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/pdfs" className="px-3"><FolderCopyIcon className="inline-block w-6 h-6 mr-2 -mt-2"></FolderCopyIcon>Your Pdfs</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/quiz" className="px-3"><NoteAltIcon className="inline-block w-6 h-6 mr-2 -mt-2"></NoteAltIcon>QUIZ</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/pricing" className="px-3"><PriceChangeIcon className="inline-block w-6 h-6 mr-2 -mt-2"></PriceChangeIcon>Pricing</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/contactus" className="px-3"><ContactMailIcon className="inline-block w-6 h-6 mr-2 -mt-2"></ContactMailIcon>Contact Us</NavLink>
        </li>
        <li className="mb-8  hover:shadow hover:bg-purple-900 py-2">
        <NavLink to="/ai" className="px-3"><ContactMailIcon className="inline-block w-6 h-6 mr-2 -mt-2"></ContactMailIcon>AI evaluator</NavLink>
        </li>
    </ul>
    </div>

  )
}
 export default Sidebar;