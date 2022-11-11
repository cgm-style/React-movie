import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [selectMovie, setSelectMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setSelectMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={"detailWrap"}>
      <Header />
      {loading ? (
        <div>
          <div className={"loadingAnimation"}></div>
          <h2 className={"loading"}>Loading</h2>
        </div>
      ) : (
        <div key={selectMovie.id} className={"datailWrap"}>
          <div>
            <img
              src={`${selectMovie.large_cover_image}`}
              alt={`${selectMovie.description_full}`}
            />
          </div>
          <div>
            <h1>{selectMovie.title}</h1>
            <h2>{selectMovie.description_full}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
