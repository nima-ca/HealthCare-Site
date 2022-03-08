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
  if (valueWaist && valueHeight) {
    whtrElement.innerHTML = whtr(valueWaist, valueHeight);
  } else {
    whtrElement.innerHTML = "0.00";
  }
};

whtrHeight.addEventListener("keyup", (e) => {
  valueHeight = e.target.value;
  showWhtr();
});

whtrWaist.addEventListener("keyup", (e) => {
  valueWaist = e.target.value;
  showWhtr();
});

// BMI Logic Section

const bmiHeight = document.querySelector(".bmi__height");
const bmiWeight = document.querySelector(".bmi__weight");
const bmiElement = document.querySelector(".monitor__bmi");

let bmiHeightValue, bmiWeightValue;

const bmi = (weight, height) => {
  const res = weight / height ** 2;
  return res.toFixed(2);
};

const showBmi = () => {
  if (bmiWeightValue && bmiHeightValue) {
    bmiElement.innerHTML = bmi(bmiWeightValue, bmiHeightValue);
  } else {
    bmiElement.innerHTML = "0.00";
  }
};

bmiHeight.addEventListener("keyup", (e) => {
  bmiHeightValue = e.target.value;
  showBmi();
});

bmiWeight.addEventListener("keyup", (e) => {
  bmiWeightValue = e.target.value;
  showBmi();
});
