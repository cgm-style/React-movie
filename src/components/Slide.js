import Movie from "./Movie";

let translateValue = -3700,
  tragetLi = null,
  slideItemWidth = 370; // iteam의 width 값

function prevEvent(e) {
  let target = e.target.offsetParent.previousElementSibling;
  translateValue += slideItemWidth;
  target.style.transform = `translate(${translateValue}px)`;

  if (translateValue >= 0) {
    setTimeout(() => {
      target.style.transition = `all 0s`;
      target.style.transform = `translate(-${slideItemWidth * 10}px)`;
      translateValue = -slideItemWidth * 10;
    }, 500);
    setTimeout(() => {
      target.style.transition = `all 0.5s`;
    }, 550);
  }
}
function nextEvent(e) {
  let target = e.target.offsetParent.previousElementSibling;
  console.log(translateValue);
  translateValue -= slideItemWidth;

  target.style.transform = `translate(${translateValue}px)`;

  tragetLi = target.parentNode.childNodes[1].childNodes[0].clientWidth;

  if (translateValue <= -tragetLi * 11) {
    setTimeout(() => {
      target.style.transition = `all 0s`;
      target.style.transform = `translate(-${slideItemWidth}px)`;
      translateValue = -370;
    }, 500);
    setTimeout(() => {
      target.style.transition = `all 0.5s`;
    }, 550);
  }
}

function Slide({ slide, title }) {
  return (
    <div className={"movieContainer"}>
      <p className={"movieCate"}>-{title}-</p>
      <div className={"slideWrap"}>
        <Movie
          key={slide[8].id}
          id={slide[8].id}
          coverImg={slide[8].medium_cover_image}
          title={slide[8].title}
          summary={slide[8].summary}
          genres={slide[8].genres}
        />
        <Movie
          key={slide[9].id}
          id={slide[9].id}
          coverImg={slide[9].medium_cover_image}
          title={slide[9].title}
          summary={slide[9].summary}
          genres={slide[9].genres}
        />
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
        <Movie
          key={slide[0].id}
          id={slide[0].id}
          coverImg={slide[0].medium_cover_image}
          title={slide[0].title}
          summary={slide[0].summary}
          genres={slide[0].genres}
        />
        <Movie
          key={slide[1].id}
          id={slide[1].id}
          coverImg={slide[1].medium_cover_image}
          title={slide[1].title}
          summary={slide[1].summary}
          genres={slide[1].genres}
        />
        <Movie
          key={slide[2].id}
          id={slide[2].id}
          coverImg={slide[2].medium_cover_image}
          title={slide[2].title}
          summary={slide[2].summary}
          genres={slide[2].genres}
        />
      </div>
      <div className={"slideDot"}>
        <div onClick={prevEvent} className={`prevArrow`}>
          &lt;
        </div>
        <div onClick={nextEvent} className={`nextArrow`}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Slide;
