import { getData } from "./getData";
import { API_URL } from "./const";
import { store } from "./store";
import { renderList } from "./renderList";

export const getCategory = async () => {
  const data = await getData(`${API_URL}/api/category`);
  store.category = data;
  console.log(store.category);
  const cats = data.map(createCategory);

  const categoryList = document.querySelector(".category__list");
  categoryList.textContent = "";

  categoryList.append(...cats);
};

const createCategory = (item) => {
  const { title, rus } = item;

  const categoryItem = document.createElement("li");
  categoryItem.classList.add("category__item");

  const categoryBtn = document.createElement("button");
  categoryBtn.classList.add(`category__btn`);
  categoryBtn.classList.add(`category__btn_${title}`);
  categoryBtn.textContent = `${rus}`;
  categoryItem.append(categoryBtn);

  return categoryItem;
};

export const categorySearch = (value) => {
  // const categoryBtn = document.querySelectorAll(".category__btn");
  // categoryBtn.forEach((elem) => {
  //   if (value === elem.innerHTML) console.log(value);
  // });
  console.log(store.category);
  // console.log(value);
};
