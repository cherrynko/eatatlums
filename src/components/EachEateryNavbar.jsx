import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function EachEateryNavbar(){
  return (
  <nav className="eateriesnav">
    <Link to="/" className="site-title">
      <i>eat@lums</i>
    </Link>
    <ul>
      <CustomLink to="/menu1">Menu</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/eacheaterycontactus">Contact Us</CustomLink>
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