import "./index.html";
import "./index.scss";
import { API_URL } from "./modules/const";
import { modalController } from "./modules/modalController";
import { selectController } from "./modules/selectController";
import { showPassword } from "./modules/showPassword";
import { choicesController } from "./modules/choicesController";
import { categorySearch, getCategory } from "./modules/getCategory";
import { renderList } from "./modules/renderList";
import { searchControl } from "./modules/searchContol";
import { ratingController } from "./modules/ratingController";
import { signInController, signUpController } from "./modules/sign";
import { getData } from "./modules/getData";
import { renderPerson } from "./modules/renderPerson";

const init = async () => {
  await getCategory();
  renderList();

  const eventModalSignIn = modalController({
    modal: ".modal__sign-in",
    btnOpen: ".header__auth-btn_sign-in",
    btnClose: ".modal__close",
  });
  const eventModalSignUp = modalController({
    modal: ".modal__sign-up",
    btnOpen: ".header__auth-btn_sign-up",
    btnClose: ".modal__close",
    // handlerCloseModal: () => {
    //   const form = document.querySelector(".form__sign-up");
    //   form.reset();
    // },
  });
  modalController({
    modal: ".modal__person",
    btnOpen: ".service",
    btnClose: ".modal__close",
    parentBtns: ".services__list",

    handlerOpenModal: async ({ handler, modalElem }) => {
      const data = await getData(
        `${API_URL}/api/service/${handler.dataset.id}`
      );
      renderPerson(modalElem, data);

      modalElem.append();

      const comments = document.querySelectorAll(".review__text");
      comments.forEach((comment) => {
        if (comment.scrollHeight > 38) {
          const button = document.createElement("button");
          button.classList.add("review__open");
          button.textContent = "Развернуть";
          comment.after(button);

          button.addEventListener("click", () => {
            comment.classList.toggle("review__text_open");
            button.textContent = comment.classList.contains("review__text_open")
              ? "Свернуть"
              : "Развернуть";
          });
        }
      });
    },
  });

  selectController({
    openBtn: ".category__title",
    openBlock: ".category__list",
    closeBtn: ".category__btn",
    handlerChange: (value) => {
      console.log(value);
      categorySearch(value);
    },
  });

  showPassword();
  choicesController();

  searchControl();
  // ratingController();

  signUpController(eventModalSignUp.closeModal);
  signInController(eventModalSignIn.closeModal);
};
init();
