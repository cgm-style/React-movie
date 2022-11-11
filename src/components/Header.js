import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={"headerWrap"}>
      <Link to={`/`}>
        <h1 className={"headerTitle"}>Cgm-Movie</h1>
      </Link>
      <ul className={"nav"}>
        <Link to={`/MovieCate/highMovies`}>
          <li key="nav1">highMovies</li>
        </Link>
        <Link to={`/MovieCate/middleMovies`}>
          <li key="nav2">middleMovies</li>
        </Link>
        <Link to={`/MovieCate/lowMovies`}>
          <li key="nav3">lowMovies</li>
        </Link>
        <Link to={`/MovieCate/animeMovies`}>
          <li key="nav4">animeMovies</li>
        </Link>
        <Link to={`/MovieCate/fantasyMovies`}>
          <li key="nav4">fantasyMovies</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
