import { avatarController } from "./avatarController";
import { postData } from "./postData";
import { API_URL } from "./const";
import { createCard } from "./createCard";
import { auth } from "./auth";

export const signInController = (callback) => {
  const form = document.querySelector(".form__sign-in");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const dataResponse = await postData(`${API_URL}/api/service/signin`, data);

    if (dataResponse.errors) {
      console.log(dataResponse.errors);
      return;
    }

    callback(e);

    auth(dataResponse);
  });
};

export const signUpController = (callback) => {
  const form = document.querySelector(".form__sign-up");

  const crp = avatarController({
    inputFile: ".avatar__input",
    uploadResult: ".avatar__result",
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.password[0].value !== form.password[1].value) {
      console.log("paroli ne sovpadajut"); //! obrabotka oshibki

      dataResponse.errors.forEach((error) => {
        if (form[error.field.name]) {
          console.log(error);
          form[error.field.name].style.border = "1px solid red";
        }
      });
      return;
    }
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.avatar = await crp.result({
      type: "base64",
      size: "viewport",
    });

    const dataResponse = await postData(`${API_URL}/api/service/signup`, data);

    if (dataResponse.errors) {
      console.log(dataResponse.errors);
      return;
    }

    const servicesList = document.querySelector(".services__list");

    servicesList.append(createCard(dataResponse));

    auth(dataResponse);
    form.reset();
    crp.hideAvatar();
    callback(e);
  });
};
