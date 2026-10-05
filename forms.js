/* Native HTML POST lets Formspree handle verification and delivery.
   This website never claims success before the receiving service responds. */
(() => {
  "use strict";

  function resolveEndpoint(key) {
    const config = window.CW_FORMS || {};
    const raw = (config.overrides && config.overrides[key]) || config.endpoint || "";
    try {
      const url = new URL(raw);
      if (url.protocol !== "https:" || url.hostname !== "formspree.io" ||
          url.port || url.username || url.password || url.search || url.hash ||
          !/^\/f\/[a-z0-9]+\/?$/i.test(url.pathname)) return "";
      return url.href;
    } catch (_) {
      return "";
    }
  }

  document.querySelectorAll("form[data-cw-form]").forEach((form) => {
    const fields = form.querySelector("fieldset");
    const button = form.querySelector("button[type=submit]");
    const status = form.querySelector("[data-form-status]");
    const endpoint = resolveEndpoint(form.dataset.cwForm);
    if (!fields || !button || !status) return;
    const label = button.textContent;
    let sending = false;

    function showStatus(message, kind) {
      status.textContent = message;
      status.dataset.state = kind;
      status.setAttribute("role", kind === "error" ? "alert" : "status");
    }

    function setHidden(name, value) {
      let input = form.querySelector('input[name="' + name + '"]');
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.appendChild(input);
      }
      input.value = value;
    }

    form.addEventListener("submit", (event) => {
      if (!endpoint || sending || !form.reportValidity()) {
        event.preventDefault();
        if (!endpoint) showStatus("This form is not accepting submissions yet. Please check back soon.", "setup");
        return;
      }
      if (String(new FormData(form).get("_gotcha") || "").trim()) {
        event.preventDefault();
        showStatus("We could not send this form. Please reload the page and try again.", "error");
        return;
      }
      setHidden("audience", form.dataset.cwForm);
      setHidden("page", window.location.pathname);
      setHidden("_subject", "Covenant Wealth: " + form.dataset.cwForm + " enquiry");
      sending = true;
      button.disabled = true;
      button.textContent = "Sending...";
      form.setAttribute("aria-busy", "true");
      showStatus("Opening Formspree to complete your submission...", "pending");
      // Do not prevent default here. The browser POSTS directly to Formspree.
      // The provider displays any verification, error, or confirmation page.
    });

    function restore() {
      sending = false;
      button.disabled = false;
      button.textContent = label;
      form.removeAttribute("aria-busy");
      if (endpoint) showStatus("", "ready");
    }
    // Returning with Back must not leave the button stuck in its sending state.
    window.addEventListener("pageshow", restore);

    if (endpoint) {
      form.action = endpoint;
      fields.disabled = false;
      showStatus("", "ready");
    } else {
      fields.disabled = true;
      showStatus("This form is not accepting submissions yet. Please check back soon.", "setup");
    }
  });
})();
