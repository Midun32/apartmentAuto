# Preston Ridge — QA Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Testing-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-LTS-green)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-black)

## 📋 Overview

This project is a **UI automation and quality engineering framework** built to test the apartment-search experience on the [Preston Ridge](https://www.prestonridge.com/) website.

The project simulates the experience of a prospective resident searching for an apartment, exploring floor plans, reviewing available units, interacting with the property map, viewing virtual tours, and beginning the process of scheduling a tour or applying.

The goal of this project is to demonstrate practical experience designing and maintaining a **scalable, maintainable, and CI-ready test automation framework** using modern QA engineering practices.

> **Note:** This is an independent automation project created for learning and portfolio purposes. It is not affiliated with or endorsed by Preston Ridge.

---

# 🎯 Project Objectives

The primary objectives of this project are to:

* Automate critical user journeys
* Validate the apartment-search experience
* Demonstrate scalable test automation architecture
* Implement reusable Page Object Models
* Validate both positive and negative scenarios
* Test interactive website functionality
* Implement accessibility testing
* Implement visual regression testing
* Generate automated test reports
* Integrate automated testing into CI/CD
* Demonstrate effective debugging and failure analysis

---

# 🧑‍💻 User Journey Under Test

The primary test journey represents a prospective resident searching for an apartment.

```text
Homepage
   ↓
Floor Plans
   ↓
Select Bedroom Type
   ↓
Browse Floor Plans
   ↓
Select Apartment/Floor Plan
   ↓
Review Apartment Details
   ↓
Review Available Units
   ↓
View Apartment Location
   ↓
Interact With Property Map
   ↓
View Virtual Tour
   ↓
Schedule a Tour / Begin Application
```

---

# 🧪 Testing Scope

## Functional Testing

The framework covers critical functionality including:

* Homepage navigation
* Floor plan navigation
* Bedroom type selection
* Floor plan details
* Apartment availability
* Apartment/unit information
* Property location
* Interactive property map
* Virtual tours
* Schedule-a-tour functionality
* Application entry points
* Navigation links
* Buttons and calls-to-action

---

## 🔍 Negative Testing

Negative scenarios are included to validate how the application behaves under unexpected or invalid conditions.

Examples include:

* Invalid form inputs
* Missing required fields
* Invalid email addresses
* Empty search/filter results
* Invalid user interactions
* Unexpected navigation states

---

## ♿ Accessibility Testing

Accessibility checks will be implemented using automated accessibility testing tools.

The test suite will evaluate common accessibility issues such as:

* Missing form labels
* Missing alternative text
* Invalid ARIA attributes
* Heading structure
* Accessibility violations

Automated accessibility testing is intended to complement, rather than replace, manual accessibility evaluation.

---

## 👀 Visual Regression Testing

Visual regression tests will be implemented for important pages and components.

Potential areas include:

* Homepage
* Floor plans
* Apartment details
* Property map
* Important UI components

The goal is to identify unintended visual changes between builds.

---

# 🏗️ Automation Architecture

The project follows a maintainable test automation architecture using **Page Object Model (POM)**, reusable fixtures, centralized test data, and utility functions.

```text
                    ┌─────────────────────┐
                    │     Test Cases      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Page Objects     │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
           Test Data       Fixtures        Utils
                │              │              │
                └──────────────┼──────────────┘
                               ▼
                    ┌─────────────────────┐
                    │      Playwright     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Preston Ridge     │
                    │       Website       │
                    └─────────────────────┘
```

---

# 📁 Project Structure

```text
preston-ridge-qa-automation/
│
├── tests/
│   ├── smoke/
│   ├── navigation/
│   ├── floor-plans/
│   ├── apartment-details/
│   ├── interactive-map/
│   ├── virtual-tour/
│   ├── accessibility/
│   └── visual/
│
├── pages/
│   ├── HomePage.ts
│   ├── FloorPlansPage.ts
│   ├── ApartmentPage.ts
│   └── PropertyMapPage.ts
│
├── fixtures/
│
├── test-data/
│
├── utils/
│
├── playwright.config.ts
├── package.json
├── README.md
│
└── .github/
    └── workflows/
        └── playwright.yml
```

---

# 🛠️ Technology Stack

| Technology         | Purpose                                   |
| ------------------ | ----------------------------------------- |
| **Playwright**     | Browser automation and end-to-end testing |
| **TypeScript**     | Programming language                      |
| **Node.js**        | Runtime environment                       |
| **Git**            | Version control                           |
| **GitHub**         | Source control and portfolio              |
| **GitHub Actions** | Continuous Integration                    |
| **axe-core**       | Accessibility testing                     |
| **HTML Reporter**  | Test reporting                            |

Additional technologies may be introduced as the framework evolves.

---

# 🌐 Browsers

The test suite is designed to support cross-browser execution.

Planned browser coverage:

* Chromium
* Firefox
* Chrome

Mobile/responsive testing will also be considered for critical user journeys.

---

# 🧪 Test Strategy

Tests are organized according to risk and importance.

### Smoke Tests

Critical tests that verify the application is functional.

Examples:

* Homepage loads
* Floor Plans page loads
* Floor plans are displayed
* Apartment details can be accessed

### Regression Tests

Broader tests covering important application functionality.

Examples:

* Filtering
* Apartment details
* Availability
* Property map
* Virtual tours
* Forms

### Accessibility Tests

Automated checks for common accessibility violations.

### Visual Tests

Screenshot-based regression testing for selected pages and components.

---

# 📊 Test Prioritization

Tests will be prioritized using a risk-based approach.

| Priority | Description | Example                      |
| -------- | ----------- | ---------------------------- |
| **P0**   | Critical    | Website unavailable          |
| **P1**   | High        | Floor plans cannot be viewed |
| **P2**   | Medium      | Virtual tour unavailable     |
| **P3**   | Low         | Minor visual/content issue   |

The highest-priority tests will be included in the CI smoke suite.

---

# Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js LTS
* npm
* Git
* VS Code

Verify the installations:

```bash
node --version
npm --version
git --version
```

---

# 📦 Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd preston-ridge-qa-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# ▶️ Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/floor-plans/floor-plans.spec.ts
```

Run tests using a specific browser:

```bash
npx playwright test --project=chromium
```

---

# 📈 Test Reports

After execution, Playwright generates an HTML test report.

Open the report with:

```bash
npx playwright show-report
```

The report provides information about:

* Passed tests
* Failed tests
* Skipped tests
* Test duration
* Screenshots
* Traces
* Failure details
---

# 🔄 Continuous Integration

Tests are executed automatically using **GitHub Actions**.

The CI pipeline is designed to:

```text
Code Push / Pull Request
          ↓
Install Dependencies
          ↓
Install Playwright
          ↓
Run Tests
          ↓
Generate Report
          ↓
Upload Test Artifacts
          ↓
Pass / Fail
```

The CI pipeline helps ensure that changes do not introduce regressions into the automated test suite.

---

# 📋 Test Coverage

Current coverage:

| Area              | Status         |
| ----------------- | -------------- |
| Homepage          | 🔄 In Progress |
| Navigation        | 🔄 In Progress |
| Floor Plans       | 🔄 In Progress |
| Apartment Details | 🔄 In Progress |
| Availability      | 🔄 In Progress |
| Interactive Map   | 🔄 In Progress |
| Virtual Tours     | 🔄 In Progress |
| Forms             | 🔄 In Progress |
| Accessibility     | 🔄 Planned     |
| Visual Regression | 🔄 Planned     |
| CI/CD             | 🔄 Planned     |

This section will be updated as new test coverage is implemented.

---

# 📸 Test Evidence

Screenshots, traces, and test reports will be included for relevant failures and test executions.

---

# 🧠 Quality Engineering Considerations

This project focuses not only on test automation but also on broader quality engineering practices.

Key considerations include:

* Risk-based testing
* Maintainable automation
* Test reliability
* Test data management
* Failure diagnostics
* Cross-browser compatibility
* Accessibility
* Visual consistency
* CI/CD integration
* Regression prevention

The objective is to demonstrate **how automation contributes to software quality**, rather than simply increasing the number of automated test cases.

---

# ⚠️ Limitations

This project is an independent portfolio exercise.

Because the application is a live third-party website:

* Tests will avoid destructive actions.
* Tests will not submit real applications.
* Tests will not submit unnecessary personal information.
* Tests will avoid actions that could negatively affect the website or its users.
* Test cases may need to be updated if the website changes.

---



This project demonstrates practical experience with modern test automation, quality engineering principles, and continuous integration practices.
