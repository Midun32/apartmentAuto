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

---done

## FP-002 — Verify Floor Plan Cards Are Displayed

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the Floor Plans page.
2. Locate the floor-plan results.
3. Verify floor-plan cards or equivalent results are displayed.

### Expected Result

Available floor plans are displayed with meaningful identifying information.

---

## FP-003 — Verify Floor Plan Information

**Priority:** P1
**Type:** Functional / Data Validation
**Automation:** Yes

### Steps

1. Open the Floor Plans page.
2. Select a floor plan.
3. Verify the floor-plan details.

### Expected Result

The selected floor plan displays the appropriate information, such as:

* Floor-plan name
* Bedroom count
* Bathroom count
* Square footage
* Pricing information where available
* Availability information where available

---

## FP-004 — Open Individual Floor Plan

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the Floor Plans page.
2. Select an individual floor plan.
3. Wait for navigation or page content to load.

### Expected Result

The corresponding floor-plan detail page opens successfully.

---

# 5. Apartment Test Cases

## APT-004 — Verify Unit Location CTA

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open an apartment/floor-plan page.
2. Locate the View Location functionality.
3. Select View Location.

### Expected Result

The user is taken to the appropriate property location/map experience.

---

# 6. Interactive Property Map Test Cases

---

## MAP-001 — Verify Interactive Map Loads

**Priority:** P1
**Type:** Functional / Smoke
**Automation:** Yes

### Steps

1. Navigate to the interactive property map.
2. Wait for the map to load.
3. Verify the primary map interface is visible.

### Expected Result

The interactive property map loads successfully.

---

## MAP-002 — Verify Map Is Interactive

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the interactive map.
2. Select an available building/unit or interactive map element.
3. Observe the resulting content.

### Expected Result

The selected map element responds to user interaction.

---

## MAP-004 — Verify Bedroom and Bathroom Information on Map

**Priority:** P1
**Type:** Data Validation
**Automation:** Yes

### Steps

1. Select an apartment/unit on the map.
2. Locate bedroom and bathroom information.
3. Verify both values are displayed.

### Expected Result

Bedroom and bathroom information is displayed correctly.

---

## MAP-005 — Verify Floor Information on Map

**Priority:** P2
**Type:** Data Validation
**Automation:** Yes

### Steps

1. Select an apartment/unit on the interactive map.
2. Locate the floor information.

### Expected Result

The appropriate floor information is displayed.

---

## MAP-006 — Verify Availability on Map

**Priority:** P1
**Type:** Data Validation
**Automation:** Yes

### Steps

1. Select an available apartment/unit.
2. Locate availability information.
3. Verify availability is displayed.

### Expected Result

Availability information is displayed for the selected unit where applicable.

---

## MAP-007 — Verify Map Data Matches Floor Plan Data

**Priority:** P1
**Type:** End-to-End / Data Consistency
**Automation:** Yes

### Steps

1. Open a floor-plan page.
2. Select an available apartment/unit.
3. Record:

   * Apartment/unit number
   * Bedroom count
   * Bathroom count
   * Floor
   * Availability
   * Price where available
4. Open the interactive property map.
5. Locate the same apartment/unit.
6. Compare the displayed information.

### Expected Result

The apartment/unit information displayed on the floor-plan experience matches the corresponding information on the interactive property map.

### Why This Test Matters

This validates **data consistency across separate user experiences**, not simply whether a button works.

---

# 7. Virtual Tour Test Cases

---

## TOUR-002 — Verify Virtual Tour Opens

**Priority:** P2
**Type:** Functional
**Automation:** Yes

### Steps

1. Select the virtual tour CTA.
2. Wait for the tour interface to load.

### Expected Result

The virtual tour opens successfully.

--

## TOUR-004 — Verify Virtual Tour Can Be Closed

**Priority:** P2
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the virtual tour.
2. Locate the close control.
3. Close the tour.

### Expected Result

The tour closes and the user returns to the underlying page.

---

# 8. Schedule Tour Test Cases

---

## SCHED-001 — Open Schedule Tour

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the homepage.
2. Select Schedule Tour.
3. Wait for the schedule experience to load.

### Expected Result

The Schedule Tour experience loads successfully.

---

## SCHED-002 — Verify Required Fields

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the Schedule Tour form.
2. Review the form fields.
3. Identify required fields.

### Expected Result

Required fields are displayed and identifiable.

---

## SCHED-003 — Validate Empty Required Fields

**Priority:** P1
**Type:** Negative
**Automation:** Yes

### Steps

1. Open the Schedule Tour form.
2. Leave required fields empty.
3. Attempt to continue/submit where safe to do so.

### Expected Result

The form prevents progression and displays appropriate validation messages.

---

## SCHED-004 — Validate Invalid Email

**Priority:** P1
**Type:** Negative
**Automation:** Yes

### Test Data

```text
invalid-email
test@
example
```

### Steps

1. Open the Schedule Tour form.
2. Enter invalid email data.
3. Complete other required fields with non-sensitive test values.
4. Attempt to continue where safe.

### Expected Result

The email field is rejected and an appropriate validation message is displayed.

---

# 10. Navigation Test Cases

---

## NAV-001 — Verify Main Navigation Links

**Priority:** P1
**Type:** Functional
**Automation:** Yes

### Steps

1. Open the homepage.
2. Identify each primary navigation link.
3. Select each link individually.
4. Verify the resulting destination.

### Expected Result

Each primary navigation item routes the user to the correct destination.

---

# 11. Accessibility Test Cases

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

## A11Y-004 — Keyboard Navigation

**Priority:** P2
**Type:** Accessibility
**Automation:** Partial

### Steps

1. Navigate to a critical page.
2. Use keyboard navigation without relying on a mouse.
3. Move through interactive elements using Tab/Shift+Tab.
4. Verify focus is visible.

### Expected Result

Critical interactive elements can be reached and operated using keyboard navigation where expected.

---

# 13. End-to-End Customer Journey

---

## E2E-001 — Prospective Resident Apartment Search

**Priority:** P0
**Type:** End-to-End / Critical User Journey
**Automation:** Yes

### Preconditions

The website is available.

### Steps

1. Navigate to the Preston Ridge homepage.
2. Navigate to Floor Plans.
3. Select a bedroom category.
4. Select a floor plan.
5. Review apartment details.
6. Locate available units.
7. Select an available unit where applicable.
8. Navigate to the unit location.
9. Interact with the property map.
10. Verify apartment/unit information.
11. Open a virtual tour where available.
12. Return to the apartment/floor-plan experience.
13. Navigate toward Schedule Tour or the application entry point.
14. Stop before submitting any real-world form/application.

### Expected Result

The user can progress through the primary apartment-search journey without encountering unexpected navigation, broken functionality, or inconsistent information.

---

# 14. Data Consistency Test Cases

---

## DATA-001 — Floor Plan vs Apartment Data

**Priority:** P1
**Type:** Data Consistency
**Automation:** Yes

### Steps

1. Open a floor-plan page.
2. Capture the displayed floor-plan information.
3. Open an associated apartment/unit.
4. Compare applicable values.

### Expected Result

Information remains consistent between the floor-plan and apartment experiences.

---

## DATA-002 — Apartment vs Interactive Map Data

**Priority:** P1
**Type:** Data Consistency
**Automation:** Yes

### Steps

1. Select an available apartment/unit.
2. Capture the apartment/unit details.
3. Open the interactive property map.
4. Locate the same apartment/unit.
5. Compare applicable information.

### Expected Result

Information is consistent between the apartment details and interactive map.

---

# 16. Test Execution Matrix

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

# 20. Notes

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

# 21. Definition of a High-Quality Automated Test

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
