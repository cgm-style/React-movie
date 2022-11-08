import Movie from "./Movie";

let translateValue = 0,
  slideItemWidth = 370, // item의 width 값
  counter = 1;

function prevEvent(e) {
  // 슬라이드 이전 버튼
  let target = e.target.offsetParent.previousElementSibling;

  if (target.className.indexOf("active") === -1) {
    // 개별 슬라이드를 위한 if문 액티브 없을시 진행
    const slideWrapTarget = [...document.querySelectorAll(".slideWrap")]; // 모든 슬라이드 객체를 선택
    slideWrapTarget.map((slide) => {
      // map으로 모든 슬라이드에 개별적으로 적용
      if (slide.className.indexOf("active") === 0) {
        // 액티브 존재하면 초기화
        slide.classList -= " active";
        counter = 1;
        translateValue = 0;
      }
    });
    target.classList += " active"; // 현재 선택된 슬라이드 액티브
  }

  translateValue = -target.style.transform.replace(/[^0-9]/g, ""); // 현재의 translate 값 받아오기
  translateValue += slideItemWidth; // 현재의 translate값에 item의 width값 더해주기
  counter -= 1; // 슬라이드 카운팅

  target.style.transform = `translate(${translateValue}px)`; // 슬라이드 움직여 주는 부분

  if (counter <= 1) {
    // 슬라이드 이전버튼으로 1번째 슬라이드 이하가 되었을때 맨 우측 슬라이드로 이동
    translateValue = -slideItemWidth * 6;
    target.style.transform = `translate(-${slideItemWidth * 6}px)`;
    counter = 7;
  }
}
function nextEvent(e) {
  // 슬라이드 다음 버튼
  let target = e.target.offsetParent.previousElementSibling;

  if (target.className.indexOf("active") === -1) {
    // 개별 슬라이드를 위한 if문 액티브 없을시 진행
    const slideWrapTarget = [...document.querySelectorAll(".slideWrap")]; // 모든 슬라이드 객체를 선택
    slideWrapTarget.map((slide) => {
      // map으로 모든 슬라이드에 개별적으로 적용
      if (slide.className.indexOf("active") != -1) {
        // 액티브 존재하면 초기화
        slide.classList = "slideWrap";
        counter = 1;
        translateValue = 0;
      }
    });
    target.classList += " active"; // 현재 선택된 슬라이드 액티브
  }

  translateValue = -target.style.transform.replace(/[^0-9]/g, ""); // 현재의 translate 값 받아오기
  translateValue -= slideItemWidth; // 현재의 translate값에 item의 width값 더해주기
  counter += 1; // 슬라이드 카운팅

  target.style.transform = `translate(${translateValue}px)`; // 슬라이드 움직여 주는 부분

  if (counter === 8) {
    // 제일 우측 슬라이에서 다음 버튼을 눌렀을 시 첫번째 슬라이드로 이동
    translateValue = 0;
    target.style.transform = `translate(-${translateValue}px)`;
    counter = 1;
  }
}

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
