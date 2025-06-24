window.onload = function () {
  // === Typeform Popup ===
  const closeTypeformButton = document.getElementById("closeTypeformButton");
  if (closeTypeformButton) {
    closeTypeformButton.addEventListener("click", function () {
      document.getElementById("typeform-container").style.display = "none";
      document.getElementById("typeform-backdrop").style.display = "none";
    });

    setTimeout(() => {
      document.getElementById("typeform-container").style.display = "block";
      document.getElementById("typeform-backdrop").style.display = "block";
    }, 10000);
  }

  // === Consultation Modal ===
  const openBtn = document.getElementById("open-modal");
  const modal = document.getElementById("consultation-modal");
  const closeBtn = document.querySelector(".close-modal");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // === Widget Close Buttons ===
  document.querySelectorAll(".close-widget").forEach(button => {
    button.addEventListener("click", function () {
      const parentDetails = this.closest("details");
      if (parentDetails) {
        parentDetails.removeAttribute("open");
      }
    });
  });

  // === Membership Login Widget ===
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      unlockWidget();
    });
  }
};

// === Login Validation Function ===
function unlockWidget() {
  const username = document.getElementById('widgetUsername').value;
  const password = document.getElementById('widgetPassword').value;
  const errorMessage = document.getElementById('errorMessage');

  if (username === '1' && password === '2') {
    document.getElementById('widgetContentProtected').style.display = 'block';
    document.getElementById('protectedWidget').style.display = 'none';
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Invalid credentials, please try again.';
  }
}

function closeWidget() {
  document.getElementById('widgetContentProtected').style.display = 'none';
  document.getElementById('protectedWidget').style.display = 'flex';

  document.getElementById('widgetUsername').value = '';
  document.getElementById('widgetPassword').value = '';
  document.getElementById('errorMessage').textContent = '';
}