const startBtn = document.getElementById("btn-start");
if (startBtn != null) {
  startBtn.addEventListener("click", () => {
    window.location.href = "./screen_start.html";
  });
}

const back = document.getElementById("btn-nav-back");
if (back != null) {
  back.addEventListener("click", () => {
    history.back(-1);
  });
}
