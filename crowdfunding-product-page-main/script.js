document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidemenu = document.getElementById("sidemenu");
  const bookmarkBtn = document.getElementById("bookmarkBtn");
  const progress = document.getElementById("file");
  const totalBackers = document.querySelector(".update div:nth-child(2) h1");
  const totalMoney = document.querySelector(".update div:nth-child(1) h1");
  const thankYouModal = document.getElementById("thank-you-modal");
  const closeBtns = document.querySelectorAll(".close");
  const continueBtn = document.querySelector(".btn-continue");
  const backProjectBtn = document.getElementById("backProjectButton");
  const pledgeModal = document.getElementById("pledgeModal");

  backProjectBtn.addEventListener("click", () => {
    pledgeModal.style.display = "block";
  });
})
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      pledgeModal.style.display = "none";
      thankYouModal.style.display = "none";
    }
  });

  window.onclick = function (event) {
    if (event.target == pledgeModal) {
      pledgeModal.style.display = "none";
    } else if (event.target == thankYouModal) {
      thankYouModal.style.display = "none";
    }
  }
  continueBtn.onclick = function () {
    pledgeModal.style.display = "none";
    thankYouModal.style.display = "block";
  }
  document.querySelector(".btn-close").onclick = function () {
    thankYouModal.style.display = "none";
  }


  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("bookmarked");
    if (bookmarkBtn.classList.contains("bookmarked")) {
      bookmarkBtn.innerHTML = '<img src="images/icon-bookmark.svg" alt="" /> Bookmarked';
    } else {
      bookmarkBtn.innerHTML = '<img src="images/icon-bookmark.svg" alt="" /> Bookmark';
    }
  });
});



document.addEventListener('DOMContentLoaded', (event) => {
  const totalPledgeGoal = 10000;
  let currentPledges = 89914; //local stored
  //  update the progress bar
  function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = Math.min((currentPledges / totalPledgeGoal) * 100, 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${Math.floor(progressPercentage)}%`;
  }
  function simulatePledgeIncrease(amount) {
    currentPledges += amount;
    updateProgressBar();
  }
  updateProgressBar();
});

document.addEventListener('DOMContentLoaded', (event) => {
  const endDate = new Date('2024-07-30T00:00:00'); // end date

  function updateCountdown() {
    const now = new Date();
    const timeDiff = endDate - now;

    if (timeDiff <= 0) {
      document.getElementById('countdown').innerText = "The crowdfunding campaign has ended!";
      return;
    }

    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${daysLeft} days left`;

    setTimeout(updateCountdown, 1000 * 60 * 60 * 24); // after 24hrs
  }

  updateCountdown();
});


