const path = window.location.pathname;

const startBtn = document.getElementById("btn-start");
if (startBtn != null) {
  startBtn.addEventListener("click", () => {
    window.location.href = "./screen_start.html";
  });
}

const next = document.getElementById("btn-nav-next");
if (next != null) {
  next.addEventListener("click", () => {
    switch (path) {
      case "/screen_start.html":
        window.location.href = "./screen_order_main.html";
        break;
      default:
        break;
    }
  });
}

const back = document.getElementById("btn-nav-back");
if (back != null) {
  back.addEventListener("click", () => {
    if (path == "/screen_start.html") {
      localStorage.setItem("whereToEatOption", undefined);
    }
    history.back(-1);
  });
}
