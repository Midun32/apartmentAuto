# Preston Ridge — Test Cases

**Project:** Preston Ridge QA Automation Framework
**Application Under Test:** https://www.prestonridge.com/
**Automation Tool:** Playwright
**Language:** TypeScript
**Test Type:** Functional / E2E / Negative / Accessibility / Visual
**Author:** Ademidun(Mimi) Adesola
**Status:** In Progress

---

# 1. Test Case Legend

| Field               | Description                                      |
| ------------------- | ------------------------------------------------ |
| **Test ID**         | Unique identifier for the test                   |
| **Priority**        | P0 = Critical, P1 = High, P2 = Medium, P3 = Low  |
| **Type**            | Functional, Negative, E2E, Accessibility, Visual |
| **Automation**      | Whether the test is planned for automation       |
| **Preconditions**   | Conditions required before execution             |
| **Steps**           | Actions performed during the test                |
| **Expected Result** | Expected application behavior                    |

---

# 2. Test Environment

### Base URL

```text
https://www.prestonridge.com/
```

### Primary Browser

```text
Chromium
```

### Additional Browsers

```text
Firefox
Chrome
```

### Viewports

```text
Desktop
Mobile
```

---

# 3. Homepage Test Cases

---

## HOME-001 — Verify Homepage Loads

**Priority:** P0
**Type:** Functional / Smoke
**Automation:** Yes

### Preconditions

The user has an active internet connection.

### Steps

1. Navigate to the Preston Ridge homepage.
2. Wait for the page to finish loading.
3. Verify the page title.
4. Verify the primary page content is visible.

### Expected Result

The homepage loads successfully without a visible application error.

---

## HOME-002 — Navigate to Floor Plans

**Priority:** P0
**Type:** Functional / Smoke
**Automation:** Yes

### Steps

1. Navigate to the homepage.
2. Select the Floor Plans navigation item.
3. Wait for navigation to complete.

### Expected Result

The user is navigated to the Floor Plans page successfully.

---

## HOME-003 — Navigate to book a Tour

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Navigate to the homepage.
2. Locate the Schedule Tour call-to-action.
3. Click the schedule tour button.

### Expected Result

User is navigated to thhe page successfully

---

## HOME-004 — Verify Homepage Responsive Layout

**Priority:** P2
**Type:** Responsive
**Automation:** Yes

### Steps

1. Open the homepage at desktop viewport.
2. Verify layout and navigation.
3. Open the homepage at mobile viewport.
4. Verify navigation and primary content.
5. Verify there is no unintended horizontal scrolling.

### Expected Result

The homepage remains usable at supported desktop and mobile viewport sizes.

---

# 4. Floor Plans Test Cases

---

## FP-001 — Verify Bedroom Categories Are Displayed

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the Floor Plans page.
2. Locate the bedroom categories/options.
3. Verify the expected bedroom categories are displayed.

### Expected Result

The available bedroom categories are visible to the user.

---

## FP-002 — Verify Floor Plan Cards Are Displayed

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the Floor Plans page.
2. Locate the floor-plan results.
3. Verify floor-plan cards are displayed.

### Expected Result

Available floor plans are displayed with meaningful identifying information.

---

## FP-003 — Individual can perform virtual tour of Floor Plan

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the Floor Plans page.
2. Select an individual floor plan.
3. Verify user can see 360 tour button.
4. Verify user can see Virtual tour button.
5. Verify user can see Apply now button.
6. Verify user can see Guided Tour button.
7. User clicks on Virtual tour button and is navigated to tour page.
8. User is able to naviagte to living room virtually.
9. User is able to naviagte to bedroom virtually.
10. Then user can exit virtual tour safely.

### Expected Result

The corresponding floor-plan detail page opens successfully.

---

# 5. Apartment Test Cases

## APT-001 — Verify Unit Location CTA

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open a floor-plan page.
2. Locate the View Location functionality for an apartment.
3. Select View Location.

### Expected Result

The user is taken to the appropriate property location.

---

# 6. Interactive Property Map Test Cases

---

## MAP-001 — Verify Map Is Interactive

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Navigate to the interactive property map page.
2. Verify the primary map interface is visible.
3. Open the interactive map.
4. Select a floor in the map.
5. Select an available on the interactive map element.
6. Verify user can see apply button.

### Expected Result

The selected map element responds to user interaction.

---

# 8. Schedule Tour Test Cases

---

## SCHED-001 — Validate Empty Required Fields

**Priority:** P1
**Type:** Negative
**Automation:** Yes

### Steps

1. User goes to schedule tour page.
2. Then selects a date.
3. Then selects a time.
4. And clicks on confirm button.
5. The user is taken to the information modal and leaves required fields empty.
6. Attempt to submit where safe to do so.
7. User is prohibited from submitting without inputting reqiured fields.

### Expected Result

The form prevents progression and displays appropriate validation messages.

---

# 9. Accessibility Test Cases

---

## A11Y-001 — Homepage Accessibility Scan

**Priority:** P1
**Type:** Accessibility
**Automation:** Yes

### Steps

1. Navigate to the homepage.
2. Run an automated accessibility scan.
3. Capture detected violations.
4. Verify accessibility check mark.

### Expected Result

No critical or serious automated accessibility violations are present.

---

# 10. Test Execution Matrix

| Test Area         | Smoke | Regression | Cross-Browser | Accessibility | Visual |
| ----------------- | ----: | ---------: | ------------: | ------------: | -----: |
| Homepage          |     ✅ |          ✅ |             ✅ |             ✅ |      ✅ |
| Navigation        |     ✅ |          ✅ |             ✅ |             — |      — |
| Floor Plans       |     ✅ |          ✅ |             ✅ |             ✅ |      ✅ |
| Apartment Details |     ✅ |          ✅ |             ✅ |             ✅ |      ✅ |
| Available Units   |     ✅ |          ✅ |             ✅ |             — |      — |
| Interactive Map   |     ✅ |          ✅ |             ✅ |             ✅ |      — |
| Virtual Tours     |     — |          ✅ |             ✅ |             — |      — |
| Schedule Tour     |     ✅ |          ✅ |             ✅ |             ✅ |      — |
| Contact Form      |     — |          ✅ |             ✅ |             ✅ |      — |

---


The goal is to establish a stable foundation before expanding coverage.

---

---

# 11. Notes

These test cases are designed for a live third-party application.

Automation must:

* Avoid destructive actions
* Avoid submitting real applications
* Avoid entering sensitive personal information
* Avoid unnecessary contact requests
* Respect CAPTCHA and bot-protection mechanisms
* Avoid bypassing security controls
* Avoid excessive request volume

Where a test requires a final real-world submission, validation should stop before the submission step unless an explicitly authorized test environment is available.

---

# 12. Definition of a High-Quality Automated Test

Each automated test should:

* Test one clear behavior or closely related behavior
* Have a meaningful test name
* Use stable locators
* Have clear assertions
* Be independent from unrelated tests
* Minimize hard-coded dynamic data
* Produce useful failure information
* Be maintainable
* Be safe to execute repeatedly
* Provide value to the regression suite
