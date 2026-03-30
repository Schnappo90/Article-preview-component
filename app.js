(() => {
  const socialMenu = document.getElementById("share-menu");
  const shareButton = document.querySelector("button");

  if (!socialMenu || !shareButton) {
    return console.error("Required elements not found");
  }

  shareButton.addEventListener("click", () => {
    shareButton.classList.toggle("open");
    socialMenu.classList.toggle("open");

    shareButton.ariaExpanded = String(shareButton.classList.contains("open"));
  });
})();
