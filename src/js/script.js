const quoteEl = document.querySelector(".advice-box__quote");
const diceEl = document.querySelector(".diceBtn");
const quoteId = document.querySelector(".quote-Id");

const slipContainer = {
  id: 0,
  advice: "",
};

window.addEventListener("load", function (e) {
  getAdvice();
});

diceEl.addEventListener("click", function () {
  getAdvice();
});

const getAdvice = async function () {
  try {
    quoteEl.textContent = `Loading...`;
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Not found 💥💥💥");
    }

    const data = await response.json();
    const { slip } = data;

    slipContainer.id = slip.id;
    slipContainer.advice = slip.advice;

    quoteId.textContent = `${slipContainer.id}`;
    quoteEl.textContent = `"${slipContainer.advice}"`;
  } catch (err) {
    console.log(err);
  }
};

// window.onload = getAdvice;
