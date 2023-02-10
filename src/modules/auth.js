import { store } from "./store";
import { API_URL } from "./const";

export const auth = (data) => {
  store.user.name = data.name;
  store.user.category = data.category;
  store.user.id = data.id;
  store.user.avatar = data.avatar;

  console.log(store.user); //todo sdelatj avtorizaciju

  const headerAuth = document.querySelector(".header__auth");
  const headerSignIn = createSignIn(store.user);

  if (store.user.id) {
    headerAuth.style.display = "none";
    headerSignIn.style.display = "flex";
  }
};

const createSignIn = (data) => {
  const headerSignIn = document.querySelector(".header__sign-in");

  const headerUserAvatar = new Image();
  headerUserAvatar.src = `${API_URL}/${data.avatar}`;
  headerUserAvatar.classList.add("header__user_avatar");

  const headerUserData = document.createElement("div");
  headerUserData.classList.add("header__user_data");

  const headerUserName = document.createElement("span");
  headerUserName.classList.add("header__user_name");
  headerUserName.textContent = data.name;

  const headerUserCategory = document.createElement("span");
  headerUserCategory.classList.add("header__user_category");
  headerUserCategory.textContent = data.category;

  const headerChangeStatus = document.createElement("button");
  headerChangeStatus.classList.add("header__changestatus");
  headerChangeStatus.textContent = "Изменить услугу";

  headerUserData.append(headerUserName, headerUserCategory);
  headerSignIn.append(headerUserAvatar, headerUserData, headerChangeStatus);

  return headerSignIn;
};

`<div class="header__sign-in">
<img src="./img/smallAva.png" alt="" class="header__user_avatar" />

<div class="header__user_data">
  <span class="header__user_name">Павел</span>
  <span class="header__user_category">Фотограф</span>
</div>

<button class="header__changestatus">Изменить услугу</button>

</div>`;
