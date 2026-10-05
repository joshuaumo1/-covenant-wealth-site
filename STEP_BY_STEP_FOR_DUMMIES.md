# Covenant Wealth Website: Step-by-Step Setup for Beginners

This guide tells you exactly what to do with the Covenant Wealth website files.

## What you are building

You are setting up a simple website for Covenant Wealth using GitHub, GitHub Pages, and Codex.

The site has:

- Main homepage: `www.cowealth.com`
- Entrepreneurs page: `www.cowealth.com/entrepreneurs/`
- Churches page: `www.cowealth.com/churches/`
- Investors page: `www.cowealth.com/investors/`

The code is intentionally simple: plain HTML, CSS, and JavaScript.

---

## Part 1 - Understand the files

After you unzip the website folder, you will see these files:

| File or folder | What it does |
|---|---|
| `index.html` | Main homepage |
| `styles.css` | Website design, colors, spacing, mobile layout |
| `script.js` | Small interactive features like the mobile menu |
| `entrepreneurs/index.html` | Page for entrepreneurs |
| `churches/index.html` | Page for churches and ministries |
| `investors/index.html` | Page for investors, donors, and capital partners |
| `CNAME` | Tells GitHub Pages the custom domain is `www.cowealth.com` |
| `README.md` | Basic project notes |
| `codex-instructions.md` | Prompts and rules for using Codex safely |
| `STEP_BY_STEP_FOR_DUMMIES.md` | This beginner setup guide |

Do not delete these files unless you know exactly why.

---

## Part 2 - Create your GitHub account

1. Go to GitHub.
2. Create an account or sign in.
3. Once logged in, you are ready to create a repository.

A repository is just an online project folder. Your Covenant Wealth website will live inside that folder.

---

## Part 3 - Create a new GitHub repository

1. In GitHub, click the plus sign `+` near the top-right.
2. Click **New repository**.
3. Repository name:

   ```text
   covenant-wealth-site
   ```

4. Choose **Public** for the easiest GitHub Pages setup.
5. Do not worry about advanced settings.
6. Click **Create repository**.

You now have an empty online folder where the website code will go.

---

## Part 4 - Upload the website files to GitHub

1. Open the new `covenant-wealth-site` repository.
2. Click **Add file**.
3. Click **Upload files**.
4. Open the unzipped website folder on your computer.
5. Drag everything inside the website folder into GitHub.

Make sure you upload the files themselves, not an extra nested folder if GitHub shows it strangely.

You should see files like:

```text
index.html
styles.css
script.js
CNAME
README.md
codex-instructions.md
STEP_BY_STEP_FOR_DUMMIES.md
entrepreneurs/
churches/
investors/
```

6. Scroll down.
7. In the commit message box, type:

   ```text
   Add Covenant Wealth website files
   ```

8. Click **Commit changes**.

Your website files are now saved in GitHub.

---

## Part 5 - Turn on GitHub Pages

GitHub Pages is what turns your code into a live website.

1. Inside the repository, click **Settings**.
2. On the left side, click **Pages**.
3. Under **Build and deployment**, look for **Source**.
4. Choose:

   ```text
   Deploy from a branch
   ```

5. Under **Branch**, select:

   ```text
   main
   ```

6. For folder, select:

   ```text
   /root
   ```

7. Click **Save**.

Wait a few minutes. GitHub will publish the site.

Your temporary website address will look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/covenant-wealth-site/
```

Open that link and test the site.

---

## Part 6 - Connect your custom domain: www.cowealth.com

You only do this if you own or control the `cowealth.com` domain.

### In GitHub

1. Go to your repository.
2. Click **Settings**.
3. Click **Pages**.
4. Find **Custom domain**.
5. Enter:

   ```text
   www.cowealth.com
   ```

6. Click **Save**.
7. Keep **Enforce HTTPS** turned on once GitHub allows it.

### In your domain provider account

This is where you bought or manage `cowealth.com`.

You need to create this DNS record:

```text
Type: CNAME
Name: www
Value: YOUR-GITHUB-USERNAME.github.io
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

Example:

```text
Type: CNAME
Name: www
Value: joshuagithubname.github.io
```

DNS can take minutes or several hours to update.

---

## Part 7 - Connect GitHub to Codex

Codex needs access to your GitHub repository so it can read and edit the website files.

1. Open ChatGPT.
2. Go to settings or connectors/apps.
3. Find **GitHub**.
4. Connect your GitHub account.
5. Allow access to the repository:

   ```text
   covenant-wealth-site
   ```

6. Open Codex.
7. Choose the `covenant-wealth-site` repository when Codex asks what project to work on.

Now Codex can help you edit the website.

---

## Part 8 - First prompt to give Codex

Paste this into Codex first:

```text
Review this Covenant Wealth static website repository. Keep it beginner-friendly using plain HTML, CSS, and JavaScript. Do not convert it to React, Next.js, Tailwind, or another framework unless I explicitly ask.

Check the homepage, entrepreneur page, church page, and investor page for layout consistency, mobile responsiveness, accessibility, and SEO basics. Make only safe improvements and summarize every file changed.
```

This prevents Codex from making the project too complicated.

---

## Part 9 - How to ask Codex for changes

Use clear, small requests.

Good prompt:

```text
Update the Entrepreneurs page to make the call-to-action stronger. Keep the design consistent with the rest of the site. Do not change the site structure.
```

Good prompt:

```text
Add a short FAQ section to the Churches page with 4 questions and answers. Keep it simple and mobile-friendly.
```

Good prompt:

```text
Improve the homepage copy so it speaks clearly to entrepreneurs, churches, and investors. Do not add new frameworks or external libraries.
```

Bad prompt:

```text
Make it amazing.
```

Bad prompt:

```text
Rebuild everything however you want.
```

Do not give vague prompts. Codex will make better changes when your instructions are specific.

---

## Part 10 - Before accepting Codex changes

Every time Codex edits the site, check these things:

- Does the homepage still load?
- Do the Entrepreneurs, Churches, and Investors pages still open?
- Does the mobile menu work?
- Did Codex keep the site as plain HTML, CSS, and JavaScript?
- Did Codex explain what files it changed?
- Did Codex preserve the Covenant Wealth tone and mission?

If Codex overcomplicates the project, say:

```text
Undo the framework conversion. Keep this as a simple static website using HTML, CSS, and JavaScript only.
```

---

## Part 11 - Simple editing without Codex

If you want to make a small text change yourself:

1. Open GitHub.
2. Click the file you want to edit, for example `index.html`.
3. Click the pencil icon.
4. Edit the text.
5. Scroll down.
6. Click **Commit changes**.

GitHub Pages will republish the site automatically after a few minutes.

---

## Part 12 - What not to do yet

Do not add these yet:

- Login system
- Payment processing
- Member dashboard
- Course platform
- Database
- Complicated React or Next.js app
- AI chatbot
- CRM integration

Those are phase two. First, get the public site clean, clear, and live.

---

## Part 13 - Your best next moves

Do these in order:

1. Create GitHub account.
2. Create `covenant-wealth-site` repository.
3. Upload the website files.
4. Turn on GitHub Pages.
5. Test the temporary GitHub Pages link.
6. Connect `www.cowealth.com` only after the test site works.
7. Connect Codex to the repository.
8. Ask Codex to review the site.
9. Make only small improvements first.
10. Publish and share the link with trusted reviewers.

---

## Copy-and-paste checklist

```text
[ ] I created a GitHub account.
[ ] I created the covenant-wealth-site repository.
[ ] I uploaded index.html, styles.css, script.js, and all folders.
[ ] I turned on GitHub Pages.
[ ] I opened the temporary GitHub Pages site.
[ ] I tested the homepage.
[ ] I tested /entrepreneurs/.
[ ] I tested /churches/.
[ ] I tested /investors/.
[ ] I connected www.cowealth.com in GitHub Pages.
[ ] I added the CNAME DNS record with my domain provider.
[ ] I connected GitHub to Codex.
[ ] I gave Codex the first review prompt.
[ ] I reviewed Codex changes before accepting them.
```

---

## Emergency fixes

### The site does not load

Check that `index.html` is in the root of the repository, not hidden inside another folder.

### The custom domain does not work

Wait longer. DNS can take time. Also check that your DNS has a CNAME record for `www` pointing to your GitHub username domain.

### Codex cannot see the repository

Check GitHub connector permissions. Make sure Codex has access to the correct repository.

### The site looks broken after Codex edits it

Ask Codex:

```text
Review the last changes and identify what broke the layout. Restore the previous working layout while keeping only safe copy edits.
```

