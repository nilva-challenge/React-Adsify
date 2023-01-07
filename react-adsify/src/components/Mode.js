export const darkMode = () => {
  document.body.classList.add("bg-black");
  document.body.classList.add("text-white");
};

export const LightMode = () => {
  document.body.classList.remove("bg-black");
  document.body.classList.remove("text-white");
};
