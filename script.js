const form = document.getElementById("payment-form");
const statusElement = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const studentName = formData.get("studentName");

  statusElement.classList.add("success");
  statusElement.textContent = `Payment request for ₹8,000 submitted successfully, ${studentName}. This fee will be refunded by the college after project completion.`;

  form.reset();
});
