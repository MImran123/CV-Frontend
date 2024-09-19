// Variables to manage active link
let links = document.querySelectorAll("#quick-links a");
let profilePic = document.getElementById("profile-pic");

// Event listeners for the quick links to scroll to the sections
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });

    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");

    if (link.getAttribute("href") === "#introduction-section") {
      profilePic.classList.add("enlarged");
    } else {
      profilePic.classList.remove("enlarged");
    }
  });
});

// Function to handle profile picture click
function toggleProfilePic() {
  profilePic.classList.toggle("enlarged");
}

// Add event listener to the profile picture for click events
profilePic.addEventListener("click", toggleProfilePic);

// Ensure profile picture resize works correctly by removing enlargement on outside click
document.addEventListener("click", function (e) {
  // Remove enlargement when clicking outside the profile picture and section links
  if (
    !profilePic.contains(e.target) &&
    !Array.from(links).some((link) => link.contains(e.target))
  ) {
    profilePic.classList.remove("enlarged");
  }
});

// Add enlargement class when page loads or refreshes
window.addEventListener("load", function () {
  profilePic.classList.add("enlarged");
});

// Scroll to the top on page unload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
