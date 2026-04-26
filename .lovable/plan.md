## Add Google Search Console Verification Meta Tag

Add a single meta tag inside the `<head>` of `index.html` so Google Search Console can verify ownership of the site.

### Change

**File:** `index.html`

Insert this line inside `<head>` (placed near the other `<meta>` tags, after the `author` meta):

```html
<meta name="google-site-verification" content="googleb0628a439996e231" />
```

### Notes

- The string `googleb0628a439996e231.html` you provided is the **HTML file** verification method (you'd upload that file to `/public/`). If you want the file-upload method instead, I can create `public/googleb0628a439996e231.html` with the required single-line content instead of (or in addition to) the meta tag.
- After deploying, click **Verify** in Google Search Console. The tag must remain in place to keep verification active.
- This verification tag will apply to all domains serving this codebase (`evogue.com.ng`, `www.evogue.com.ng`, and the Lovable preview/published URLs).