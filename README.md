# Simple Web Test App

This is a minimal containerized web app that uses **Nginx** to serve static HTML and **Playwright** to run end-to-end tests in a separate container.

Everything runs using **Docker Compose**, making it easy to build, run, and test the app locally or in CI.

---

## 🧱 Project Structure

```
.
├── app/                  # Static HTML app (index.html)
├── nginx/                # Nginx config (default.conf)
├── tests/                # Playwright test file(s)
├── Dockerfile.nginx      # Builds Nginx image
├── Dockerfile.playwright # Builds Playwright image
├── docker-compose.yml    # Orchestrates both containers
└── README.md             # You're here!
```

---

## 🚀 How to Run This Project

### 1. Prerequisites

- ✅ [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

---

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/simple-web-test-app.git
cd simple-web-test-app
```

Replace `YOUR_USERNAME` with your GitHub username.

---

### 3. Build and Start Everything

```bash
docker compose up --build
```

What happens:
- `nginx` container serves your HTML app at [http://localhost:8080](http://localhost:8080)
- `playwright` container runs a test to verify the app works as expected

---

### 4. Shut Down the Containers

After you're done:

```bash
docker compose down
```

---

## ✅ Expected Output

If successful, your terminal should show:

```bash
✓  test.spec.ts › should show the page and click button
1 passed (762ms)
```

You can also open [http://localhost:8080](http://localhost:8080) in your browser to see the app manually.

---

## 🧪 Writing More Tests

Add more `.ts` test files inside the `tests/` folder.  
They will be picked up automatically when you run the Playwright container.

Example:

```ts
test('page has heading', async ({ page }) => {
  await page.goto('http://nginx');
  await expect(page.locator('h1')).toHaveText('Hello from Nginx!');
});
```

---

## 📦 Built With

- [Nginx](https://nginx.org/)
- [Playwright](https://playwright.dev/)
- [Docker](https://www.docker.com/)

---

## 📝 License

This project is for educational purposes. Feel free to fork, reuse, or modify it!
