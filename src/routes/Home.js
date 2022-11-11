import { useEffect, useState } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";

function Home() {
  const [loading, setLoading] = useState(true);
  const [highMovies, highSetMovies] = useState([]);
  const [middleMovies, middleSetMovies] = useState([]);
  const [lowMovies, lowSetMovies] = useState([]);
  const [animeMovies, animeSetMovies] = useState([]);
  const [fantasyMovies, fantasySetMovies] = useState([]);
  const GetMovies = async () => {
    const highjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year&limit=10`
      )
    ).json();

    const middlejson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year&limit=10`
      )
    ).json();

    const lowjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=3&sort_by=year&limit=10`
      )
    ).json();

    const animejson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.3&sort_by=year&limit=10&genre=animation`
      )
    ).json();

    const fatasyjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=year&genre=fantasy&limit=10`
      )
    ).json();

    highSetMovies(highjson.data.movies);
    middleSetMovies(middlejson.data.movies);
    lowSetMovies(lowjson.data.movies);
    animeSetMovies(animejson.data.movies);
    fantasySetMovies(fatasyjson.data.movies);

    setLoading(false);
  };

  useEffect(() => {
    GetMovies();
  }, []);

  return (
    <div className={"movieWrap"}>
      <Header />
      {loading ? (
        <div>
          <div className={"loadingAnimation"}></div>
          <h2 className={"loading"}>Loading!~</h2>
        </div>
      ) : (
        <div className={`mainWrap`}>
          <Slide slide={highMovies} title={"highMovies"} />
          <Slide slide={middleMovies} title={"middleMovies"} />
          <Slide slide={lowMovies} title={"lowMovies"} />
          <Slide slide={animeMovies} title={"animeMovies"} />
          <Slide slide={fantasyMovies} title={"fantasyMovies"} />
        </div>
      )}
    </div>
  );
}

export default Home;
