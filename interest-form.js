const interestForm = document.querySelector('.interest-form');

if (interestForm) {
  interestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = new FormData(interestForm);
    const pathway = interestForm.dataset.pathway;
    const body = [
      `Pathway: ${pathway}`,
      `Name: ${fields.get('name')}`,
      `Email: ${fields.get('email')}`,
      `Organization: ${fields.get('organization') || 'Not provided'}`,
      '',
      'Interest / message:',
      fields.get('message') || 'Please contact me about this pathway.'
    ].join('\r\n');

    const draftLink = document.querySelector('#email-draft');
    const recipient = interestForm.action.split('?')[0];
    const subject = `Covenant Wealth — ${pathway} interest`;
    draftLink.href = `${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    draftLink.hidden = false;
    document.querySelector('#email-status').textContent =
      'Your draft is ready. Review and send it in your email app. If it did not open, select “Open prepared email” below.';
    window.location.href = draftLink.href;
  });
}
