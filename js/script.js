// cookie - предупреждение

let cookieBlock = document.querySelector(".cookie__wrapper");

let cookieButton = document.querySelector(".cookie button");

cookieButton.addEventListener("click", () => {
  cookieBlock.style.display = "none";
});

let cookies = () => {
  if (!Cookies.get("hide-cookie")) {
    setTimeout(() => {
      cookieBlock.style.display = "block";
    }, 1000);
  }

  Cookies.set("hide-cookie", "true", {
    expires: 30,
  });
};

cookies();

//
