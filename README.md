# diploma
# Playwright Automation Framework | CAS Website Testing

## 🔬 Project Overview
This repository contains a robust, scalable test automation framework built to validate critical workflows and UI components of the **CAS (Chemical Abstracts Service)** platform ([cas.org](https://www.cas.org/)), a global leader in scientific data and digital R&D solutions. 

Given my background in chemical software testing, this project focus combines deep domain knowledge with modern automated engineering practices. The framework executes automated regression and functional tests ensuring seamless navigation, responsive UI validation, and smooth interaction across core solutions like SciFinder, BioFinder, and Newton ecosystems.

## 🛠️ Tech Stack
* **Language:** TypeScript
* **Test Runner:** Playwright Test
* **Design Pattern:** Page Object Model (POM) & Fixtures
* **Reporting:** Allure Report & Playwright HTML Reporter
* **Environment:** NodeJS

---

## 🏗️ Architectural Patterns & Highlights

### 🔹 Page Object Model (POM)
The framework strictly adheres to the **Page Object Model** pattern. Pages, components, and layout blocks are abstracted into isolated classes (`/pages`), decoupling test scripts from fragile DOM selectors. This ensures 100% maintainability and high code reusability.

### 🔹 Playwright Fixtures
Instead of relying on unstable global states or repetitive setup hooks (`beforeEach`), the project leverages native **Playwright Fixtures**. This provides completely isolated page contexts, accelerating test execution via parallelization and minimizing flaky test failures.

---

## 💾 Quick Start & Execution

### 1. Pre-requisites
Ensure you have **Node.js (v18 or higher)** installed on your machine.

### 2. Installation
Clone the repository and install all required dependencies:
```bash
git clone https://github.com
cd diploma
npm install
npx playwright install
```

### 3. Running Tests
You can run automated test suites using the following terminal commands:

* **Run all tests (Headless Mode):**
  ```bash
  npx playwright test
  ```
* **Run tests in interactive UI Mode (Great for debugging):**
  ```bash
  npx playwright test --ui
  ```
* **Run specific test suite (e.g., navigation):**
  ```bash
  npx playwright test tests/navigation.spec.ts
  ```

---

## 📊 Test Reporting & Insights

The framework is fully integrated with detailed reporting tools to provide rich insights into execution flows, step-by-step logs, and visual error captures.

### Allure Report Generation
To generate and view the interactive Allure dashboard locally, execute:
```bash
npm run report:generate
npm run report:open
```

**(Tip: You can add an image/screenshot of your passing Allure charts here to make it look even more professional!)*
