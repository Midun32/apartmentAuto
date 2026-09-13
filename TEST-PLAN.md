# Preston Ridge — QA Automation Test Plan

**Project:** Preston Ridge QA Automation Framework
**Application Under Test:** https://www.prestonridge.com/
**Testing Tool:** Playwright
**Programming Language:** TypeScript
**Test Type:** Web UI / End-to-End / Accessibility / Visual / API (as applicable)
**Author:** Ademidun(Mimi) Adesola
**Status:** In Progress

---

# 1. Purpose

The purpose of this test plan is to define the testing strategy, scope, priorities, and automation approach for the Preston Ridge website.

This project simulates the experience of a prospective apartment resident searching for a new home.

The primary objective is to validate that a prospective resident can successfully:

1. Discover the property
2. Explore floor plans
3. Compare apartment options
4. Review apartment details
5. Review available units
6. Locate units on the property map
7. View virtual/360° tours
8. Schedule a tour
9. Begin an application
10. Contact the property

The project is also intended to demonstrate practical Quality Engineering practices including:

* Risk-based testing
* End-to-end automation
* Maintainable automation architecture
* Reusable test components
* Cross-browser testing
* Accessibility testing
* Visual regression testing
* Test reporting
* Failure investigation
* Continuous Integration

---

# 2. Application Overview

Preston Ridge is an apartment community website that allows prospective residents to learn about the property and available apartment homes.

The site currently provides:

* One-, two-, and three-bedroom floor plans
* Floor-plan details including bedrooms, bathrooms, square footage, pricing, and availability
* Individual apartment/floor-plan pages
* Available unit information
* Unit location functionality
* Interactive property map
* Virtual and 360° tours for applicable floor plans/units
* Schedule-a-tour functionality
* Contact functionality
* Application entry points
* Property and apartment information

The website also includes accessibility-related functionality and an accessibility statement.

---

# 3. Testing Objectives

The automation framework will focus on the following objectives:

### Functional Quality

Verify that critical user-facing functionality behaves as expected.

### User Journey Validation

Validate the complete prospective-resident journey from discovering the property to selecting an apartment and progressing toward a tour or application.

### Regression Prevention

Detect defects introduced when the website changes.

### Cross-Browser Reliability

Verify critical user flows across supported browsers.

### Accessibility

Identify common automated accessibility violations on important pages.

### Visual Consistency

Detect unintended visual changes in critical UI areas.

### Test Reliability

Minimize flaky tests and ensure failures can be diagnosed efficiently.

### CI/CD

Automatically execute an appropriate test suite when code changes are introduced.

---

# 4. Scope

## 4.1 In Scope

The following functionality is within the initial automation scope.

### A. Homepage

* Homepage loads successfully
* Main navigation is visible
* Floor Plans navigation works
* Schedule Tour navigation works
* Check Availability navigation works
* Major calls-to-action function correctly
* Important property information is displayed
* Contact section is displayed
* Accessibility controls are present

### B. Floor Plans

* Floor Plans page loads
* Bedroom categories are displayed
* Floor-plan cards are displayed
* Floor-plan name is displayed
* Bedroom count is displayed
* Bathroom count is displayed
* Square footage is displayed
* Starting price is displayed where available
* Availability information is displayed where available
* Floor-plan details can be opened

The current floor-plan page includes one-, two-, and three-bedroom options and exposes details such as bedrooms, bathrooms, square footage, starting prices, virtual tours, guided tours, and application links.

### C. Individual Floor-Plan Pages

* Correct floor-plan name is displayed
* Correct bedroom count is displayed
* Correct bathroom count is displayed
* Square footage is displayed
* Pricing information is displayed
* Available units are displayed
* Apartment/unit information is displayed
* View Location is available where applicable
* Virtual Tour is available where applicable
* Apply Now is available where applicable
* Guided Tour is available where applicable

Individual floor-plan pages can expose multiple available apartments, availability dates, pricing, location links, and virtual tours.

### D. Interactive Property Map

* Map page loads
* Property/map elements are displayed
* Apartment/building selections work
* Apartment information appears when selected
* Bedroom/bathroom information is displayed
* Floor information is displayed
* Availability information is displayed
* Pricing information is displayed where available
* Apply Now functionality is available where applicable
* Schedule Tour functionality is available

The current interactive property map exposes apartment details including bedroom count, bathroom count, floor, availability and pricing information.

### E. Virtual / 360° Tours

* Tour button is displayed when applicable
* Tour opens correctly
* Dialog/modal opens correctly
* Embedded tour content loads
* Tour can be closed
* User can return to the underlying page

### F. Schedule a Tour

* Schedule Tour page/functionality can be opened
* Required fields are displayed
* Required-field validation works
* Invalid inputs are rejected
* Valid input format is accepted
* User can progress through the flow

**Important:** Automated tests must not submit real personal information or create unnecessary marketing/contact requests on the live site.

### G. Contact Form

* Required fields are displayed
* Required-field validation works
* Invalid email validation works
* Invalid phone validation works
* Message validation works
* Error messages are displayed appropriately

The current site includes required first name, last name, email, phone, and message fields, as well as bot protection.

### H. Accessibility

* Automated accessibility scan on critical pages
* Form-label checks
* Image alternative-text checks
* ARIA validation
* Heading structure checks
* Keyboard accessibility checks where practical

### I. Visual Regression

* Homepage visual baseline
* Floor Plans visual baseline
* Individual floor-plan visual baseline
* Property map visual baseline
* Selected critical components

### J. Navigation and Links

* Main navigation links
* Footer links
* External links
* New-tab behavior
* Important calls-to-action

---

# 5. Out of Scope

The following will not be directly automated against the live production environment unless a safe test environment is available:

* Submitting a real apartment application
* Creating real resident/applicant accounts
* Entering sensitive personal information
* Entering payment information
* Sending unnecessary contact/marketing requests
* Performing destructive actions
* Changing real resident information
* Completing a real lease transaction
* Sending real SMS or marketing consent requests

The objective is to test functionality without affecting real residents, applicants, or property staff.

---

# 6. Primary User Journey

The primary end-to-end journey will represent a prospective resident.

```text
Homepage
   ↓
Explore Floor Plans
   ↓
Select Bedroom Type
   ↓
Review Floor Plans
   ↓
Select Floor Plan
   ↓
Review Apartment Details
   ↓
Review Available Units
   ↓
View Unit Location
   ↓
Explore Interactive Property Map
   ↓
View Virtual Tour
   ↓
Schedule Tour / Begin Application
```

---

# 7. Test Levels

The project will use multiple levels of testing rather than relying only on UI tests.

## Level 1 — Component / Unit Testing

Where appropriate, utility functions and reusable logic will be tested independently.

Examples:

* Data formatting
* Test-data utilities
* Validation helpers

## Level 2 — API Testing

Where testable and appropriate, API endpoints will be validated independently of the browser UI.

Examples:

* Response status
* Response structure
* Required fields
* Error handling
* Data consistency

## Level 3 — UI Testing

Playwright will validate browser-based functionality.

Examples:

* Navigation
* Floor plans
* Apartment details
* Interactive map
* Forms
* Virtual tours

## Level 4 — End-to-End Testing

Critical user journeys will be tested from beginning to end.

Example:

```text
Homepage
→ Floor Plans
→ Apartment
→ Available Unit
→ Location
→ Tour
```

---

# 8. Test Prioritization

Tests will be prioritized using risk and customer impact.

| Priority | Definition                  | Example                                         |
| -------- | --------------------------- | ----------------------------------------------- |
| P0       | Critical business/user flow | Website unavailable                             |
| P1       | High-impact functionality   | Floor plans or available units cannot be viewed |
| P2       | Medium-impact functionality | Virtual tour does not open                      |
| P3       | Low-impact issue            | Minor visual/content inconsistency              |

### P0 Tests

Must be stable and suitable for the fastest smoke suite.

Examples:

* Homepage loads
* Floor Plans page loads
* Floor plans are displayed
* Critical navigation works

### P1 Tests

Run on pull requests and broader regression runs.

Examples:

* Floor-plan selection
* Apartment details
* Available-unit information
* Interactive map
* Schedule-tour flow

### P2 Tests

Run during broader regression.

Examples:

* Virtual tours
* Secondary navigation
* Additional UI functionality
* Visual regression

### P3 Tests

Lower-risk checks that may run less frequently.

Examples:

* Minor UI details
* Non-critical content validation

---

# 9. Initial Test Scenario Inventory

## Homepage

| ID       | Scenario                      | Priority | Automation |
| -------- | ----------------------------- | -------: | ---------- |
| HOME-001 | Verify homepage loads         |       P0 | Yes        |
| HOME-002 | Verify main navigation        |       P0 | Yes        |
| HOME-003 | Navigate to Floor Plans       |       P0 | Yes        |
| HOME-004 | Navigate to Schedule Tour     |       P1 | Yes        |
| HOME-005 | Verify property information   |       P2 | Yes        |
| HOME-006 | Verify accessibility controls |       P2 | Yes        |

## Floor Plans

| ID     | Scenario                        | Priority | Automation |
| ------ | ------------------------------- | -------: | ---------- |
| FP-001 | Verify Floor Plans page loads   |       P0 | Yes        |
| FP-002 | Verify bedroom categories       |       P1 | Yes        |
| FP-003 | Verify floor-plan cards         |       P1 | Yes        |
| FP-004 | Verify floor-plan details       |       P1 | Yes        |
| FP-005 | Open individual floor plan      |       P1 | Yes        |
| FP-006 | Verify pricing information      |       P2 | Yes        |
| FP-007 | Verify availability information |       P1 | Yes        |
| FP-008 | Verify virtual tour CTA         |       P2 | Yes        |
| FP-009 | Verify Apply Now CTA            |       P2 | Yes        |
| FP-010 | Verify Guided Tour CTA          |       P2 | Yes        |

## Individual Apartment / Floor-Plan Page

| ID      | Scenario                      | Priority | Automation |
| ------- | ----------------------------- | -------: | ---------- |
| APT-001 | Verify floor-plan information |       P1 | Yes        |
| APT-002 | Verify available units        |       P1 | Yes        |
| APT-003 | Verify unit pricing           |       P1 | Yes        |
| APT-004 | Verify availability date      |       P1 | Yes        |
| APT-005 | Open View Location            |       P1 | Yes        |
| APT-006 | Open virtual tour             |       P2 | Yes        |
| APT-007 | Verify Apply Now CTA          |       P2 | Yes        |

## Interactive Map

| ID      | Scenario                            | Priority | Automation |
| ------- | ----------------------------------- | -------: | ---------- |
| MAP-001 | Verify map loads                    |       P1 | Yes        |
| MAP-002 | Verify building/unit selection      |       P1 | Yes        |
| MAP-003 | Verify apartment information        |       P1 | Yes        |
| MAP-004 | Verify bedroom/bathroom information |       P1 | Yes        |
| MAP-005 | Verify floor information            |       P2 | Yes        |
| MAP-006 | Verify availability                 |       P1 | Yes        |
| MAP-007 | Verify price information            |       P2 | Yes        |
| MAP-008 | Verify map CTA navigation           |       P1 | Yes        |

## Virtual Tours

| ID       | Scenario                      | Priority | Automation |
| -------- | ----------------------------- | -------: | ---------- |
| TOUR-001 | Verify tour CTA exists        |       P2 | Yes        |
| TOUR-002 | Verify tour modal opens       |       P2 | Yes        |
| TOUR-003 | Verify embedded content loads |       P2 | Yes        |
| TOUR-004 | Close tour modal              |       P2 | Yes        |

## Schedule Tour

| ID        | Scenario                         | Priority | Automation |
| --------- | -------------------------------- | -------: | ---------- |
| SCHED-001 | Open Schedule Tour               |       P1 | Yes        |
| SCHED-002 | Verify required fields           |       P1 | Yes        |
| SCHED-003 | Validate missing required fields |       P1 | Yes        |
| SCHED-004 | Validate invalid email           |       P1 | Yes        |
| SCHED-005 | Validate invalid phone           |       P2 | Yes        |
| SCHED-006 | Validate valid input             |       P1 | Yes*       |

*The final submission step should be handled safely and should not send real information to the production site.

## Contact Form

| ID          | Scenario                 | Priority | Automation |
| ----------- | ------------------------ | -------: | ---------- |
| CONTACT-001 | Verify contact form      |       P2 | Yes        |
| CONTACT-002 | Validate required fields |       P2 | Yes        |
| CONTACT-003 | Validate email           |       P2 | Yes        |
| CONTACT-004 | Validate phone           |       P2 | Yes        |
| CONTACT-005 | Validate message         |       P2 | Yes        |

---

# 10. Data Consistency Testing

One of the major quality risks identified for this project is **data consistency across different user experiences**.

For example, information displayed for a floor plan or apartment may also appear on the interactive property map.

The automation framework should eventually compare values such as:

```text
Floor Plan
     ↓
Apartment / Unit
     ↓
Available Units
     ↓
Interactive Property Map
```

Potential validation fields:

* Apartment number
* Bedroom count
* Bathroom count
* Floor
* Availability
* Price
* Floor-plan name

Example:

```text
Expected:
Apartment 1000-413
1 Bedroom
1 Bathroom

Floor Plan Page
        ↓
Apartment 1000-413

Interactive Map
        ↓
Apartment 1000-413

Result:
PASS
```

This type of cross-page validation will be treated as a higher-value Quality Engineering scenario.

---

# 11. Test Automation Architecture

The automation framework will use a Page Object Model combined with reusable fixtures and test data.

```text
                    Test Specifications
                            │
                            ▼
                     Page Objects
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
           Fixtures      Test Data      Utilities
              │             │             │
              └─────────────┼─────────────┘
                            ▼
                        Playwright
                            │
                            ▼
                    Preston Ridge
```

---

# 12. Proposed Project Structure

```text
preston-ridge-qa-automation/
│
├── tests/
│   ├── smoke/
│   ├── homepage/
│   ├── floor-plans/
│   ├── apartments/
│   ├── interactive-map/
│   ├── virtual-tour/
│   ├── schedule-tour/
│   ├── accessibility/
│   └── visual/
│
├── pages/
│   ├── HomePage.ts
│   ├── FloorPlansPage.ts
│   ├── ApartmentPage.ts
│   ├── PropertyMapPage.ts
│   └── ScheduleTourPage.ts
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
└── TEST-PLAN.md
```

---

# 13. Locator Strategy

Locators will follow this priority:

1. `data-testid` or dedicated test attributes
2. Accessible role/name
3. Label
4. Stable text
5. CSS selectors
6. XPath only when necessary

Example preference:

```typescript
page.getByRole('button', { name: 'Schedule a Tour' })
```

over brittle selectors such as:

```typescript
page.locator(
  'div.container > div:nth-child(3) > button:nth-child(2)'
)
```

The framework will prioritize stable, user-facing selectors to improve test reliability and maintainability.

---

# 14. Test Data Strategy

Test data should be:

* Reusable
* Centralized
* Environment-independent where possible
* Easy to update
* Free of sensitive information

Example:

```text
test-data/
├── apartments.json
├── floor-plans.json
├── users.json
└── invalid-inputs.json
```

No real personal information, passwords, payment information, or sensitive credentials will be committed to GitHub.

Secrets used by CI will be managed through GitHub Actions secrets or environment variables.

---

# 15. Browser Coverage

Initial browser coverage:

* Chromium
* Firefox
* WebKit

Additional testing may include:

* Mobile Chrome
* Mobile Safari
* Responsive viewport testing

Critical smoke tests should run across the primary supported browsers.

---

# 16. Responsive Testing

Selected critical user journeys will be evaluated at desktop and mobile viewport sizes.

Priority areas:

* Navigation
* Floor plans
* Apartment details
* Available units
* Interactive map
* Schedule-tour flow
* Contact form

---

# 17. Accessibility Testing Strategy

Automated accessibility checks will be performed on important pages.

Initial targets:

* Homepage
* Floor Plans
* Individual apartment page
* Interactive property map
* Schedule Tour

Checks may include:

* Missing labels
* Image alt text
* ARIA issues
* Heading hierarchy
* Form accessibility
* Color/contrast-related automated findings
* Keyboard-related checks where practical

Automated accessibility tests are intended to identify common machine-detectable problems and do not replace manual accessibility testing.

---

# 18. Visual Regression Strategy

Visual testing will focus on pages with high visual importance.

Initial candidates:

```text
Homepage
Floor Plans
Apartment Details
Interactive Property Map
Schedule Tour
```

Visual tests should account for:

* Dynamic content
* Dates
* Pricing
* Availability
* Animations
* External content
* Fonts
* Responsive layout

Dynamic areas may require masking or other stabilization techniques.

---

# 19. Smoke Test Suite

The smoke suite should remain small and fast.

Initial smoke suite:

```text
SMOKE-001 Homepage loads
SMOKE-002 Floor Plans loads
SMOKE-003 Floor plans displayed
SMOKE-004 Individual floor plan can be opened
SMOKE-005 Available units displayed
SMOKE-006 Interactive property map loads
SMOKE-007 Critical navigation works
```

The smoke suite should be suitable for execution on every pull request.

---

# 20. Regression Test Suite

The regression suite will contain broader functionality.

The suite will include:

* Navigation
* Floor plans
* Apartment details
* Availability
* Interactive map
* Virtual tours
* Forms
* Accessibility
* Visual regression
* Cross-browser scenarios

The regression suite may run on scheduled workflows or after major changes.

---

# 21. Negative Testing Strategy

Negative testing will verify how the application behaves when users provide unexpected or invalid input.

Examples:

### Forms

```text
Missing first name
Missing last name
Invalid email
Invalid phone
Missing message
```

### Navigation / UI

```text
Missing content
Unavailable option
Unexpected page state
Failed embedded content
```

### Data

```text
No matching result
Unavailable apartment
Missing pricing
Missing availability
Unexpected data format
```

---

# 22. Reliability and Flaky Test Strategy

A test will not be considered reliable simply because it passes.

Flaky tests will be investigated for causes such as:

* Timing issues
* Race conditions
* Unstable locators
* Network dependencies
* Dynamic content
* Animation
* Third-party integrations
* Incorrect test isolation
* Shared state

Failure investigation will use:

* Screenshots
* Videos where appropriate
* Playwright traces
* Console logs
* Network information
* CI logs

The objective is to identify and correct the underlying cause rather than simply increasing timeouts.

---

# 23. CI/CD Strategy

GitHub Actions will execute automated tests.

### Pull Request Pipeline

```text
Pull Request
     ↓
Install dependencies
     ↓
Lint
     ↓
Run smoke tests
     ↓
Generate report
     ↓
Upload artifacts
     ↓
Pass / Fail
```

### Regression Pipeline

```text
Scheduled / Manual
       ↓
Full regression
       ↓
Cross-browser tests
       ↓
Accessibility
       ↓
Visual tests
       ↓
Report
```

---

# 24. Test Reporting

Test execution should provide enough information to investigate failures quickly.

Reports should include:

* Passed tests
* Failed tests
* Skipped tests
* Test duration
* Browser
* Error messages
* Screenshots
* Traces where appropriate

Playwright's HTML reporting and tracing capabilities will be used to support failure investigation.

---

# 25. Definition of Done

A test scenario will be considered complete when:

* The test has a clear objective
* The test uses stable locators
* The test is isolated
* The test has clear assertions
* The test passes consistently
* Failure information is useful
* The test is appropriately prioritized
* The test is documented
* The test is included in the appropriate suite
* CI execution has been verified where applicable

---

# 26. Quality Risks

| Risk                               | Impact | Mitigation                                                              |
| ---------------------------------- | ------ | ----------------------------------------------------------------------- |
| Website content changes frequently | High   | Prefer stable locators and data-driven validation                       |
| Pricing changes                    | Medium | Avoid excessive hard-coded values                                       |
| Apartment availability changes     | High   | Validate structure and current-state data carefully                     |
| Third-party embedded content       | Medium | Validate availability/loading rather than internal third-party behavior |
| Interactive map complexity         | High   | Isolate map interactions in dedicated tests                             |
| CAPTCHA / bot protection           | High   | Do not attempt to bypass CAPTCHA; stop before protected submission      |
| Dynamic content                    | Medium | Use appropriate waits and assertions                                    |
| Flaky network behavior             | Medium | Capture traces and investigate root causes                              |
| Live-site testing                  | High   | Avoid destructive or real-world submissions                             |

---

# 27. Automation Principles

This project will follow these principles:

### Automate valuable scenarios

Automation should provide meaningful regression coverage rather than maximize test count.

### Prefer user-focused assertions

Tests should validate what a user can see and accomplish.

### Keep tests independent

One failing test should not prevent unrelated tests from executing.

### Keep tests maintainable

Reusable page objects, fixtures, utilities, and data should be used where appropriate.

### Avoid unnecessary duplication

Repeated workflows should be abstracted without hiding important test intent.

### Diagnose failures

A failed test should provide enough evidence to understand what went wrong.

---

# 28. Success Criteria

The project will be considered successful when it demonstrates:

* A maintainable Playwright framework
* Automated critical user journeys
* Positive and negative test coverage
* Cross-browser testing
* Accessibility testing
* Visual regression testing
* Reliable test execution
* CI/CD integration
* Useful reporting
* Clear documentation
* Demonstrated root-cause analysis
* Clear separation between smoke and regression testing

---

# 29. Planned Enhancements

Future improvements:

* [ ] Expand test coverage
* [ ] Add API automation
* [ ] Add cross-page data consistency tests
* [ ] Add accessibility automation
* [ ] Add visual regression testing
* [ ] Add GitHub Actions
* [ ] Add test artifacts
* [ ] Add scheduled regression execution
* [ ] Add mobile browser testing
* [ ] Add Docker support
* [ ] Investigate flaky tests
* [ ] Add performance-oriented checks where appropriate
* [ ] Explore AI-assisted test generation
* [ ] Add test analytics / execution trends

---

# 30. Project Status

### Current Phase

**Phase 1 — Test Planning**

```text
[X] Application selected
[X] Primary user journey identified
[X] Scope defined
[X] Initial scenarios identified
[X] Test prioritization defined
[ ] Playwright framework setup
[ ] Page objects
[ ] First automated tests
[ ] CI/CD
[ ] Accessibility
[ ] Visual regression
[ ] API testing
```

---

# 31. Notes

This project uses a live third-party website for educational and portfolio purposes.

Testing will be performed responsibly and will avoid:

* Destructive behavior
* Excessive traffic
* Real application submissions
* Real personal information
* Attempts to bypass security controls
* Actions that could affect residents or property staff

The test suite should be designed to validate functionality while minimizing impact on the live application.
