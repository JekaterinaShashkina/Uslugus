import fullStar from "../img/star.svg";
import whiteStar from "../img/whiteStar.svg";

export const createStars = (commentsOrStars) => {
  const stars = Array.isArray(commentsOrStars)
    ? Math.round(
        commentsOrStars.reduce((acc, item) => Number(item.stars) + acc, 0) /
          commentsOrStars.length
      ) || 0
    : commentsOrStars;

  const wrapper = document.createElement("div");
  wrapper.classList.add("stars");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    star.classList.add("stars__item");

    if (i === 0) {
      star.alt = `specialists rating ${stars} from 5`;
    } else {
      star.alt = "";
    }
    if (stars > i) {
      star.src = fullStar;
    } else {
      star.src = whiteStar;
    }
    wrapper.append(star);
  }
  return wrapper;
};
