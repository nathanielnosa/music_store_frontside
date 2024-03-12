import { FaCogs, FaQuestionCircle, FaShoppingCart, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

export const DASHBOARD_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <MdDashboard />
  },
]

export const DASHBOARD_TOP_LINKS = [

  {
    key: 'home',
    label: 'Home',
    path: '/',
    icon: <AiFillShopping />
  },
  {
    key: 'music',
    label: 'Music Library',
    path: '/musics',
    icon: <FaShoppingCart />
  },
  {
    key: 'collection',
    label: 'Collection',
    path: '/collection',
    icon: <FaUserCircle />
  },
  {
    key: 'about',
    label: 'About',
    path: '/collection',
    icon: <FaUserCircle />
  }
]
export const DASHBOARD_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/products',
    icon: <FaCogs />
  },
  {
    key: 'products',
    label: 'Help & Support',
    path: '/products',
    icon: <FaQuestionCircle />
  },
  {
    key: 'logout',
    label: 'Logout',
    path: '/products',
    icon: <FaSignOutAlt />
  },

]

export const USER_LINKS = [
  {
    key: 'profile',
    label: 'Profile',
    path: '/products',
    icon: <FaUserCircle />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/products',
    icon: <FaCogs />
  },
  {
    key: 'signout',
    label: 'Sign Out',
    path: '/products',
    icon: <FaSignOutAlt />
  },
]