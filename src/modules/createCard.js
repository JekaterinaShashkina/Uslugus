import { API_URL, directions } from "./const";
import { store } from "./store";
import { createStars } from "./createStars";

export const createCard = (item) => {
  const { avatar, category, comments, direction, id, name, surname, price } =
    item;

  const serviceItem = document.createElement("li");
  serviceItem.classList.add("services__item");
  const service = document.createElement("article");
  service.classList.add("service");
  service.dataset.id = id;

  serviceItem.append(service);

  const serviceAvatar = new Image(50, 50);
  serviceAvatar.classList.add("service__avatar");
  serviceAvatar.src = `${API_URL}/${avatar}`;
  serviceAvatar.alt = `${category} ${surname} ${name}`;

  const servicePresent = document.createElement("div");
  servicePresent.classList.add("service__present");

  const serviceTitle = document.createElement("h3");
  serviceTitle.classList.add("service__title");
  serviceTitle.textContent = store.category.find(
    (item) => item.title === category
  ).rus;

  const serviceName = document.createElement("p");
  serviceName.classList.add("service__name");
  serviceName.textContent = `${name} ${surname[0]}.`;

  servicePresent.append(serviceTitle, serviceName);

  const servicePrice = document.createElement("p");
  servicePrice.classList.add("service__price");
  servicePrice.textContent = `${directions[direction]} ${price} ₽`;

  const serviceReview = document.createElement("div");
  serviceReview.classList.add("service__review");

  //   const serviceStars = document.createElement("div");
  //   serviceStars.classList.add("service__stars star");

  //   const serviceStar = new Image();

  const serviceCountReview = document.createElement("p");
  serviceCountReview.classList.add("service__count-review");
  serviceCountReview.textContent = comments.length.toString();

  serviceReview.append(createStars(comments), serviceCountReview);

  service.append(serviceAvatar, servicePresent, servicePrice, serviceReview);
  return serviceItem;
};
