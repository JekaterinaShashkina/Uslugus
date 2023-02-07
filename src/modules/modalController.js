export const modalController = ({
  modal,
  btnOpen,
  parentBtns,
  btnClose,
  time = 300,
  handlerOpenModal = () => {},
}) => {
  const handlerElems = parentBtns
    ? document.querySelector(parentBtns)
    : document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time} ease-in-out;
  `;

  const event = {
    handlerOpenModal,
    onOpenModal(handlerOpenModal) {
      event.handlerOpenModal = handlerOpenModal;
    },
  };

  const closeModal = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      target.closest(btnClose) ||
      event.code === "Escape"
    ) {
      modalElem.style.opacity = 0;
      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = async () => {
    await event.handlerOpenModal();
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModal);
  };

  if (parentBtns) {
    handlerElems.addEventListener("click", ({ target }) => {
      if (target.closest(btnOpen)) {
        openModal();
      }
    });
  } else {
    handlerElems.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });
  }

  modalElem.addEventListener("click", closeModal);
  return event;
};
