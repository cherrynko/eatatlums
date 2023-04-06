import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function EateriesNavbar(){
  return (
  <nav className="eateriesnav">
    <Link to="/" className="site-title">
      <i>eat@lums</i>
    </Link>
    <ul>
      <CustomLink to="/eateries">Eateries</CustomLink>
      <CustomLink to="/orders">Orders</CustomLink>
      <CustomLink to="/myorders">My Orders</CustomLink>
      <CustomLink to="/contactus">Contact Us</CustomLink>
    </ul>
  </nav>
  )
}

function CustomLink({ to, children, ...props}) {
const resplvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resplvedPath.pathname, end:true})
 
return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}{...props}>
        {children}
      </Link>
    </li>
  )
}