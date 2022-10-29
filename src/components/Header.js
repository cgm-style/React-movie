import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={`/`}>
        <h1 className={"headerTitle"}>Cgm-Movie</h1>
      </Link>
      <ul>
        <Link to={``}>
          <li key="nav1"></li>
        </Link>
        <Link to={``}>
          <li key="nav2"></li>
        </Link>
        <Link to={``}>
          <li key="nav3"></li>
        </Link>
        <Link to={``}>
          <li key="nav4"></li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
