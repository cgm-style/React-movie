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
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=year&limit=10`
      )
    ).json();

    const animejson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.3&sort_by=year&limit=10&genre=animation`
      )
    ).json();

    const fatasyjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&genre=fantasy&limit=10`
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
        <h2>Loading...</h2>
      ) : (
        <Slide slide={fantasyMovies} title={"highMovie"} />
      )}
    </div>
  );
}

export default Home;
