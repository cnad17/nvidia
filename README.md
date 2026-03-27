# Certificate Website (Static)

This project is a static HTML/CSS/JS certificate website inspired by your reference layout.

## Files

- `index.html`: Landing page with a link to the certificate route.
- `certificates/index.html`: Clean certificate route used for deploy URL.
- `certificates.html`: Legacy direct certificate page.
- `styles.css`: Styling for header, certificate content, and footer.
- `script.js`: Reads `id` query parameter and renders certificate ID.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow.

## URL Pattern

Use this route pattern:

- `/certificates/?id=xaSdyz20TZeU59IXTKAHQQ#`

## Run Locally

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/certificates/?id=xaSdyz20TZeU59IXTKAHQQ#`

## Deploy on GitHub Pages

1. Push your code to the `main` branch.
2. Open repository settings on GitHub.
3. Go to **Pages**.
4. Set **Source** to **GitHub Actions**.
5. The workflow named **Deploy Static Site to GitHub Pages** will publish automatically.

### Expected live URLs for this repo

- Home: `https://samanvaya-gupta.github.io/Drop-Out-Prediction/`
- Certificate: `https://samanvaya-gupta.github.io/Drop-Out-Prediction/certificates/?id=xaSdyz20TZeU59IXTKAHQQ#`
