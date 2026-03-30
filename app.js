(() => {
  const socialMenu = document.getElementById("share-menu");
  const shareButton = document.querySelector("button");
  const shareWrapper = document.querySelector(".share-wrapper");

  if (!socialMenu || !shareButton) {
    return console.error("Required elements not found");
  }

  shareButton.addEventListener("click", () => {
    shareButton.classList.toggle("open");
    socialMenu.classList.toggle("open");

    shareButton.ariaExpanded = String(shareButton.classList.contains("open"));
  });

  document.addEventListener("click", (e) => {
    if (
      socialMenu.classList.contains("open") &&
      !shareWrapper.contains(e.target)
    ) {
      shareButton.classList.remove("open");
      socialMenu.classList.remove("open");
      shareButton.ariaExpanded = "false";
    }
  });
})();
