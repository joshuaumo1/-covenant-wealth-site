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

1. Replace `hello@cowealth.com` with the real email address.
2. Add a basic contact form service, such as Formspree, Tally, Typeform, or HubSpot.
3. Add real founder/team bios.
4. Add real program dates and partner application details.
5. Add a real logo once available.
6. Add testimonials only after you have permission and evidence.
7. Add legal review before describing any investment or capital product.


## Beginner setup guide

Start with `STEP_BY_STEP_FOR_DUMMIES.md`. It walks you through GitHub, GitHub Pages, the custom domain, and Codex step by step.
