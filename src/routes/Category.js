import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Movie from "../components/Movie";
import { useEffect, useState } from "react";

function Category() {
  const [loading, setLoading] = useState(true);
  const [movie, movies] = useState([]);
  const { cateTitle } = useParams();

  let json = [];

  const getMovie = async (minimum_rating, cateType) => {
    if (cateType === undefined) {
      json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=${minimum_rating}&sort_by=like_count`
        )
      ).json();
    } else {
      json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=${minimum_rating}&sort_by=like_count&genre=${cateType}`
        )
      ).json();
    }

    movies(json.data.movies);
    setLoading(false);

    return false;
  };

  useEffect(() => {
    let checkCate = {
      highMovies() {
        getMovie(9);
      },
      middleMovies() {
        getMovie(7);
      },
      lowMovies() {
        getMovie(3);
      },
      animeMovies() {
        getMovie(8.3, "animation");
      },
      fantasyMovies() {
        getMovie(5, "fantasy");
      },
    };

    function checkCateType(cateTitle) {
      return checkCate[cateTitle]();
    }

    checkCateType(cateTitle);
  }, [cateTitle]);

  return (
    <div className={"detailWrap"}>
      <Header />
      {loading ? (
        <div>
          <div className={"loadingAnimation"}></div>
          <h2 className={"loading"}>Loading!~</h2>
        </div>
      ) : (
        <div className={"cateWrap"}>
          <h1>- {cateTitle} -</h1>
          <div className={"cateContainer"}>
            {movie.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
