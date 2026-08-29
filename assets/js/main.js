/**
 * VS Tectra - shared site JavaScript
 *
 * Keeps page-specific behaviour small and reusable.
 */

(function () {
  "use strict";

  const form = document.getElementById("contact-form");

  if (!form) {
    return;
  }

  const button = document.getElementById("submit-button");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    button.disabled = true;
    button.textContent = "Sending…";
    status.className = "status";
    status.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      status.className = "status success";
      status.textContent =
        "Thank you! Your enquiry has been sent. We'll get back to you shortly.";
    } catch (error) {
      status.className = "status error";
      status.textContent =
        "Sorry, we could not send your enquiry. Please try again.";
    } finally {
      button.disabled = false;
      button.textContent = "Send enquiry →";
    }
  });
})();
