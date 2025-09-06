// Constant ticket fee
const TICKET_PRICE = 20;

// Elements
const form = document.getElementById("ticketForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ticketsInput = document.getElementById("tickets");
const totalPrice = document.getElementById("totalPrice");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ticketsError = document.getElementById("ticketsError");

const modal = document.getElementById("confirmationModal");
const closeModal = document.getElementById("closeModal");
const confirmationMessage = document.getElementById("confirmationMessage");

// 🟢 Feature 1: Update passage fee dynamically
ticketsInput.addEventListener("input", () => {
  const tickets = parseInt(ticketsInput.value) || 0;
  totalPrice.textContent = `Your passage fee: $${tickets * TICKET_PRICE}`;
});

// 🟢 Feature 2: Custom validation + immersive messages
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  ticketsError.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Every adventurer must have a name before stepping into Jumanji.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "A messenger channel is required. Provide your email.";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "This channel cannot reach you. Provide a valid email.";
    isValid = false;
  }

  // Tickets validation
  const tickets = parseInt(ticketsInput.value);
  if (isNaN(tickets) || tickets < 1) {
    ticketsError.textContent = "No journey without a pass. Choose at least one.";
    isValid = false;
  }

  // If valid, open the portal
  if (isValid) {
    confirmationMessage.textContent = 
      `${nameInput.value.trim()}, your path is sealed. ${tickets} pass(es) secured. Passage fee: $${tickets * TICKET_PRICE}. You are now entering Jumanji...`;
    modal.style.display = "block";
  }
});

// 🟢 Feature 3: Close portal (modal)
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
