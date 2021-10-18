document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("dancin");
  audio.loop = true;
  audio.volume = 1;

  var volume = document.getElementById("volume");

  volume.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      this.children[0].classList.remove("hidden");
      this.children[1].classList.add("hidden");
    } else {
      audio.pause();
      this.children[0].classList.add("hidden");
      this.children[1].classList.remove("hidden");
    }
  });
});
