document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("playMusic");
  let isPlaying = false;

  // Tạo hiệu ứng ngôi sao
  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".stars").appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  // Tạo ngôi sao mỗi 100ms
  setInterval(createStar, 100);

  // Xử lý nút phát nhạc
  musicBtn.addEventListener("click", function () {
    if (!isPlaying) {
      music.play();
      musicBtn.innerHTML =
        '<span>hetcuu</span><div class="btn-secondary"></div>';
      isPlaying = true;
    } else {
      music.pause();
      musicBtn.innerHTML =
        '<span>♪ Nghe Nhạc</span><div class="btn-secondary"></div>';
      isPlaying = false;
    }
  });

  // Thêm hiệu ứng hover cho nút
  const buttons = document.querySelectorAll(".btn-main, .btn-music");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
