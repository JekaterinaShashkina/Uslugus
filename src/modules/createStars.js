import fullStar from "../img/star.svg";
import whiteStar from "../img/whiteStar.svg";

export const createStars = (comments) => {
  const stars =
    Math.round(
      comments.reduce((acc, item) => Number(item.stars) + acc, 0) /
        comments.length
    ) || 0;

  const wrapper = document.createElement("div");
  wrapper.classList.add("service__stars");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    star.classList.add("service__star");

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
