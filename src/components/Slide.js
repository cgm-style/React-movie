import Movie from "./Movie";

function Slide({ slide, title }) {
  return (
    <div className={"movieContainer"}>
      <p className={"movieCate"}>-{title}-</p>
      <div className={"slideWrap"}>
        {slide.map((movie) => (
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
  );
}

export default Slide;
