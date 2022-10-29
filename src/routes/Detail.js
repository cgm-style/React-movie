import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [selectMovie, setSelectMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.7&sort_by=year&movie_id=${id}`
      )
    ).json();
    json.data.movies.map((item) => {
      if (item.id == id) {
        setSelectMovie(item);
        return false;
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={"detailWrap"}>
      <Header />
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div key={selectMovie.id}>
          <div>
            <h1>{selectMovie.title}</h1>
            <img
              src={`${selectMovie.large_cover_image}`}
              alt={`${selectMovie.summary}`}
            />
          </div>
          <div>
            <h2>{selectMovie.summary}</h2>
          </div>
          {console.log(selectMovie)}
        </div>
      )}
    </div>
  );
}
export default Detail;
