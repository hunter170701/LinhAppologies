const message = document.querySelector(".actual-message");
const headMessage = document.querySelector(".ghost-head .actual-message");

let index = 1;
setInterval(() => {
  if (index === 7) {
    document.querySelector(".ghost").style.animation =
      "identifier2 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) forwards";
    document.querySelector(".ghost").style.transformOrigin = "center";
    document.querySelector(".ghost-mouth").style.borderRadius =
      "100rem 100rem 0 0";
    document.querySelector(".ghost-eye-inner").classList.add("active");
    document.querySelector(".ghost-head").classList.add("active");
    document.querySelector(".main").animate(
      [
        {
          backgroundColor: "red",
        },
        { backgroundColor: "black" },
      ],
      {
        duration: 1000,
        iterations: Infinity,
      }
    );
    let head_index = 1;
    setInterval(() => {
      if (head_index === 12) {
        head_index = 0;
      }
      headMessage.style.transform = `translateY(-${head_index * 2.2}rem)`;
      head_index++;
    }, 2400);
  }
  message.style.transform = `translateY(-${index * 2.2}rem)`;
  index++;
}, 2400);
