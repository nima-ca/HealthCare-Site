// WHtR Logic Section

const whtrHeight = document.querySelector(".whtr__height");
const whtrWaist = document.querySelector(".whtr__waist");
const whtrElement = document.querySelector(".monitor__whtr");

let valueHeight, valueWaist;

const whtr = (waist, height) => {
  const res = waist / height;
  return res.toFixed(2);
};

const showWhtr = () => {
  let whtrValidation =
    valueWaist > 0 &&
    valueWaist < 1000 &&
    valueHeight > 0 &&
    valueHeight < 1000 &&
    valueHeight != 0;

  if (whtrValidation) whtrElement.innerHTML = whtr(valueWaist, valueHeight);
  else whtrElement.innerHTML = "0.00";
};

whtrHeight.addEventListener("keyup", (e) => {
  valueHeight = e.target.value;
  showWhtr();
});

whtrWaist.addEventListener("keyup", (e) => {
  valueWaist = e.target.value;
  showWhtr();
});
