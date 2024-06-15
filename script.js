document.addEventListener("DOMContentLoaded", function () {
  const birthdaySong = document.getElementById("birthdaySong");
  const playButton = document.getElementById("playButton");

  // Autoplay may be blocked, so we add a button to manually play if needed
  birthdaySong.play().catch((error) => {
    console.error("Autoplay was prevented:", error);
    playButton.style.display = "block"; // Show the play button if autoplay fails
  });

  playButton.addEventListener("click", () => {
    birthdaySong.play();
    playButton.style.display = "none"; // Hide the button once it has been clicked
  });
});
