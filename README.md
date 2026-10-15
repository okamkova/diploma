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
The project is split into different test layers (UI, API, Unit). You can run them via the following predefined npm scripts:

* **Run UI Test Suite (Playwright with Headed Browser):**
  This command automatically clears old reporting data, sets up the config, and executes UI tests.
  ```bash
  npm run UI_tests
  ```
* **Run API Test Suite (Jest):**
  ```bash
  npm run api_tests
  ```
* **Run Unit Test Suite (Jest):**
  ```bash
  npm run unit_tests
  ```
* **Format Code (Prettier):**
  ```bash
  npm run format:code
  ```

---

## 📊 Test Reporting & Insights

The framework is fully integrated with **Allure Report** to provide rich insights into test execution flows, history, and status.

### Allure Report Generation & Open
To clean previous metrics, generate a fresh interactive dashboard from the results, and automatically open it in your default browser, simply run:
```bash
npm run allure_report
```
