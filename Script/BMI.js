const bmiHeight = document.querySelector(".bmi__height");
const bmiWeight = document.querySelector(".bmi__weight");
const bmiElement = document.querySelector(".monitor__bmi");

let bmiHeightValue, bmiWeightValue;

const bmi = (weight, height) => {
  const res = weight / height ** 2;
  return res.toFixed(2);
};

const showBmi = () => {
  let BMIValidation =
    bmiWeightValue > 0 &&
    bmiWeightValue < 1000 &&
    bmiHeightValue > 0 &&
    bmiHeightValue < 1000 &&
    bmiHeightValue != 0;

  if (BMIValidation) bmiElement.innerHTML = bmi(bmiWeightValue, bmiHeightValue);
  else bmiElement.innerHTML = "0.00";
};

bmiHeight.addEventListener("keyup", (e) => {
  bmiHeightValue = e.target.value;
  showBmi();
});

bmiWeight.addEventListener("keyup", (e) => {
  bmiWeightValue = e.target.value;
  showBmi();
});
