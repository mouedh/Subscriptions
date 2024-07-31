import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HomeList</Link>
          </li>
          <li>
            <Link to="/Modal1">Modal1</Link>
          </li>
          <li>
            <Link to="/ButtonSelect">ButtonSelect</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;