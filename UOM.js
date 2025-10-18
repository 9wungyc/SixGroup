 document.addEventListener("DOMContentLoaded", function() {
  const intentionImage = document.querySelector(".intention-image");

  function showIntentionImage() {
    const sectionTop = intentionImage.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      intentionImage.classList.add("show");
    }
  }

  window.addEventListener("scroll", showIntentionImage);
  showIntentionImage(); // check on page load
});