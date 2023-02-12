export const createElement = (tag, param, parent) => {
  const elem = document.createElement(tag);
  Object.assign(elem, param);

  if (parent) {
    parent.append(elem);
  }
  return elem;
};
