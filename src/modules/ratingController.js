export const ratingController = () => {
  const stars = document.querySelector(".rating");
  const ratingInput = document.querySelector(".rating__input");

  stars.addEventListener("click", ({ target, currentTarget }) => {
    const star = target.closest(".rating__star");
    if (star) {
      currentTarget.dataset.stars = star.dataset.rating;
      ratingInput.value = star.dataset.rating;
    }
  });
};
