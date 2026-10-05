# Covenant Wealth Website Starter v2

This is a beginner-friendly static website for Covenant Wealth.

It uses plain:

- HTML
- CSS
- JavaScript

No React. No Next.js. No build tools. No npm. No complicated developer setup.

## Website structure

```text
covenant-wealth-site-v2/
  index.html                  Main landing page
  styles.css                  Main design system and layout
  script.js                   Mobile menu behavior
  CNAME                       Custom domain setting for GitHub Pages
  robots.txt                  Search engine crawl instructions
  sitemap.xml                 Site map for main pages
  entrepreneurs/index.html    Entrepreneur microsite/page
  churches/index.html         Church/ministry microsite/page
  investors/index.html        Investor/donor microsite/page
  codex-instructions.md       Prompts and rules for using Codex safely
  .gitignore                  Files Git should ignore
```

## Domain

The project is set up for:

```text
www.cowealth.com
```

That is why the `CNAME` file contains:

```text
www.cowealth.com
```

Important: this file does not buy the domain or configure DNS. You still need to own/control the domain and point the DNS records to GitHub Pages through your domain provider.

## Logo status

There is no logo yet, so the site uses a clean text-based wordmark:

```text
CW + Covenant Wealth
```

When you have a real logo, add it to an `assets/` folder and replace the brand markup in each HTML file.

## How to preview locally

Open `index.html` directly in your browser.

You can also right-click the file and choose:

```text
Open With > Google Chrome
```

## How to upload to GitHub

1. Create a GitHub repository called `covenant-wealth-site`.
2. Upload all files and folders from this project.
3. Commit the files.
4. Go to repository `Settings`.
5. Go to `Pages`.
6. Choose `Deploy from branch`.
7. Choose `main` and `/root`.
8. Save.

Your pages will eventually be available at:

```text
https://YOURUSERNAME.github.io/covenant-wealth-site/
```

Once the custom domain is configured, the site should use:

```text
https://www.cowealth.com/
```

## Page URLs

When deployed with the custom domain, your structure will be:

```text
https://www.cowealth.com/
https://www.cowealth.com/entrepreneurs/
https://www.cowealth.com/churches/
https://www.cowealth.com/investors/
```

## Best way to use Codex

Open Codex, connect it to this GitHub repository, and give it small tasks.

Good first prompt:

```text
Review this static HTML/CSS/JS website. Keep it beginner-friendly. Do not convert it to React, Next.js, or another framework. Improve layout, accessibility, and copy only where needed. Summarize every file you changed.
```

Bad prompt:

```text
Make this website better.
```

That is too broad and may cause Codex to overbuild.

## Recommended next build steps

1. Confirm the public contact address (currently `joshumo95@gmail.com`).
2. Add a basic contact form service, such as Formspree, Tally, Typeform, or HubSpot.
3. Add real founder/team bios.
4. Add real program dates and partner application details.
5. Add a real logo once available.
6. Add testimonials only after you have permission and evidence.
7. Add legal review before describing any investment or capital product.


## Beginner setup guide

Start with `STEP_BY_STEP_FOR_DUMMIES.md`. It walks you through GitHub, GitHub Pages, the custom domain, and Codex step by step.

## Mission, coaching, capital, and partner pathways

The website remains plain HTML, CSS, and JavaScript. The homepage and mission
page use the mission, vision, values, business stages, and operating model from
the Covenant Wealth Partner Introduction (August 2026). Launch milestones are
presented as a proposed roadmap.

- `mission/index.html`: mission, vision, six values, five business stages, and the operating model.
- `coaching/index.html`: coaching overview; `coaching/request/` and `coaching/apply/` contain the separate coaching request and vetted-coach application forms.
- `capital/index.html`: capital and giving overview; `capital/readiness/`, `capital/one-time-gift/`, and `capital/monthly-partner/` contain separate inquiry forms.
- `partners/index.html`: five partner categories, with contributions and value returned.
- `churches/index.html`, `investors/index.html`, and the three partner subfolders: category information and buttons for applications and approved-member access. Each category’s `interest/` subfolder contains its partnership form.
- `entrepreneurs/index.html`: entrepreneur interest and links to coaching and capital readiness.
- `forms.css`: service-page and form layouts.
- `interest-form.js`: prepares separate email drafts for every form, including all completed fields.

All forms currently prepare email drafts to `joshumo95@gmail.com`. Visitors
must review the draft and press **Send** in their email application. These forms
do not send messages from a server. To change a recipient, update the relevant
form's `action="mailto:..."` and its visible email links/help text. The JavaScript
uses each form's recipient and subject independently.

### Adding a donation link later

There is no payment provider connected yet. The giving forms express interest;
they do not collect money or start recurring charges. When a verified hosted
payment link is available, add an ordinary checkout link to `capital/one-time-gift/index.html`,
and a monthly-giving checkout link to `capital/monthly-partner/index.html`.
Update the matching buttons on `capital/index.html` if the checkout replaces an inquiry. Keep the
inquiry forms as an alternative. Only describe online payment or recurring
billing after the linked provider actually supports it. Card or bank details
should be entered on the payment provider's checkout, not emailed through
these forms.

### Local checks

Serve the repository with `python3 -m http.server 8000`, then check every route
and the homepage links. JavaScript syntax checks are `node --check script.js`
and `node --check interest-form.js`; no package installation or build is needed.
For browser checks, test narrow phones, tablets, and desktop layouts, menu and
skip-link keyboard behavior, expanded forms, required fields, and the full
recipient/subject/body of each email draft. Use test data and intercept the
email handoff when automating checks; draft generation does not verify email
delivery. The forms also have a native mailto fallback when JavaScript is off.

## Dedicated form pages and future member access

All service and partner action buttons use normal links to separate pages.
The coaching/capital overview pages contain choices rather than inline forms.
`service-navigation.js` redirects the former service-section bookmarks to the
new pages, so existing links to `#request-coaching`, `#become-coach`,
`#capital-readiness`, `#donate`, and `#monthly-partner` still work.

`members/index.html` lists six access pathways: coaches, ministries, schools,
business leaders/coaches, investors/donors, and community organizations. Each
has a separate page in `members/` and a direct button on its relevant public
pathway. `members.css` contains the layout. These are public sign-in previews
with disabled email/password controls and future resource placeholders. They
do not authenticate, collect credentials, grant vetted status, or protect any
content. No accounts or passwords are configured. Placeholder pages use
`noindex` and are omitted from the sitemap; this is an indexing preference,
not access control.

Before enabling real login or adding confidential resources, connect a secure
authentication service and verify invitation/approval, member identity, and
server-enforced access to the requested resources. The public pages and the
site itself can continue to use plain HTML, CSS, and JavaScript. Application
submissions must not be treated as membership approval.
