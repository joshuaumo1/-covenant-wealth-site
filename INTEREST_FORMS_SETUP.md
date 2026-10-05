# Activate the Covenant Wealth interest forms

## What changed

- Removed the homepage's three-year section and its navigation tile.
- Replaced design-session calls to action with **Have questions?**.
- Added the missing `entrepreneurs/`, `churches/`, and `investors/` pages, each with a generic interest form.
- Added a general questions form on the homepage.
- Preserved the existing main stylesheet and the Welcome to Covenant Wealth dashboard.

## Important: collection needs one account setting

The HTML forms and submission code are ready. They use a standard browser POST; Formspree displays any verification and confirmation, without a framework or AJAX dependency. They intentionally remain disabled until you enter your own Formspree endpoint. There is no fake success message, no mailto-only form, and no browser-only database. This update has NOT created a Formspree account, collected any real data, or tested your inbox.

### Step 1. Create your collection inbox

1. Visit https://formspree.io and create an account you control.
2. Verify the email address you want to receive enquiries at.
3. In the Formspree dashboard, choose **New Form**. Name it **Covenant Wealth enquiries** and choose the destination email.
4. Open **Integration** and copy **Your form's endpoint**. It will resemble `https://formspree.io/f/abcdefgh` (example only).

### Step 2. Connect all the website forms

1. On this GitHub branch, open `forms-config.js`.
2. Click the pencil (Edit).
3. Replace `endpoint: ""` with `endpoint: "YOUR_ACTUAL_FORMSPREE_ENDPOINT"`.
4. Leave the optional overrides blank. All four forms can use the same endpoint; the `audience` field identifies entrepreneurs, churches, investors, or questions.
5. Commit the edit to this branch, NOT directly to main while review is in progress.

The endpoint is a public submission address, not a password or private API key. Never add your account password, private token, bank information, or payment credentials to website code.

### Step 3. Test, then publish

1. Review the pull request and the changed pages in a preview environment, or run `python -m http.server 8000` in a downloaded copy and open `http://localhost:8000`.
2. Use your own name and email to test each form after configuration. The required consent box must be checked.
3. Complete any verification on the Formspree page. Confirm each submission in the Formspree **Submissions** area AND confirm the notification email. Check spam if necessary.
4. Verify the `audience` value identifies the correct page.
5. Review the third-party disclosure and your data-handling/privacy information before public launch.
6. Merge the reviewed branch into `main` to publish through your existing deployment. This update does not change DNS, custom domains, or hosting settings.
7. Test all four forms again on the published website. Check mobile layout and the menu too.

## Where responses go

Formspree handles the submission; notifications go to the destination email configured in that account. The website does not save responses in GitHub, cookies, or local storage. Formspree plan limits and spam settings apply. CSV export availability depends on your plan. Check current terms rather than assuming it is unlimited or free.

## Troubleshooting

- **Form not accepting submissions:** Check the endpoint in `forms-config.js`; it must use `https://formspree.io/f/` followed by your form ID.
- **Submission fails:** Follow the error shown by Formspree. Verify the form ID, email verification, account limits, allowed-domain settings, and network access. Use your browser Back button to return to the form; check saved submissions before retrying to avoid duplicates.
- **A CAPTCHA challenge appears:** Complete it on the Formspree page. The website uses a native HTML submission so the provider can handle its verification flow. Do not disable spam protections just to skip this step.
- **Email missing:** Check Formspree's submission/spam areas and your email's spam folder. A website confirmation is not proof of inbox delivery.
- **Wrong audience page opens:** Keep the three folders intact; each contains its own `index.html`. Do not put these three index files at repository root.
- **A previous Codex branch has newer edits:** Merge these changes selectively; do not overwrite newer work. This update starts from main commit `53b7697094ca7f636d85db2d3417981b735de892`.

## Files to review

`index.html`, `script.js`, `forms.css`, `forms.js`, `forms-config.js`, `entrepreneurs/index.html`, `churches/index.html`, `investors/index.html`, and this guide.

## Official references

- Create a form: https://help.formspree.io/articles/building-your-form/building-an-html-form
- Honeypot filtering: https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering
- Exporting submissions and plan requirements: https://help.formspree.io/articles/form-and-project-settings/exporting-submissions

Automated checks intercept submission events; they do not send enquiries or verify real inbox delivery. Live end-to-end testing is required after you add your own endpoint.
