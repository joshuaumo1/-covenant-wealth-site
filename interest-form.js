// Each form prepares its own email draft; sending happens in the visitor's email app.
document.querySelectorAll('.interest-form').forEach((form) => {
  const draftLink = form.querySelector('.email-draft, #email-draft');
  const status = form.querySelector('.email-status, #email-status');
  if (!draftLink || !status) return;

  const clearDraft = () => {
    draftLink.hidden = true;
    draftLink.removeAttribute('href');
    status.textContent = '';
  };
  form.addEventListener('input', clearDraft);
  form.addEventListener('change', clearDraft);
  form.addEventListener('reset', clearDraft);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const pathway = form.dataset.pathway || 'General interest';
    const lines = [`Covenant Wealth — ${pathway}`, ''];
    const fieldNames = new Set();

    for (const [name] of fields.entries()) {
      if (fieldNames.has(name)) continue;
      fieldNames.add(name);
      const controls = Array.from(form.elements).filter((control) => control.name === name);
      const control = controls.find((item) => item.type !== 'hidden');
      if (!control) continue;
      const label = control.dataset.label || control.labels?.[0]?.textContent.trim().replace(/\s*\((?:required|optional)\)\s*$/i, '') || name;
      const value = fields.getAll(name).map((item) => String(item).trim()).filter(Boolean).join(', ') || 'Not provided';
      lines.push(`${label}: ${value.replace(/\r\n|\r|\n/g, '\r\n')}`);
    }

    const action = new URL(form.action);
    const subject = form.dataset.subject || action.searchParams.get('subject') || `Covenant Wealth — ${pathway} interest`;
    draftLink.href = `${action.protocol}${action.pathname}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\r\n'))}`;
    draftLink.hidden = false;
    status.textContent = 'Your email draft is ready. Review it and press Send in your email app. If the app did not open, select “Open prepared email” below. This website has not sent your message.';
    window.location.href = draftLink.href;
  });
});

// Direct links to a form also reveal its panel, including after navigating a page anchor.
const revealLinkedForm = () => {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target?.matches('details.form-panel')) target.open = true;
};
revealLinkedForm();
window.addEventListener('hashchange', revealLinkedForm);
