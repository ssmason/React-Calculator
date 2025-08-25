# React Calculator

**Author:** Stephen Mason

A small, learning-focused calculator built with React. It renders a grid of buttons for digits and operators, shows the current expression on a display, and evaluates the expression safely using `mathjs`.

---

## What it does

- **Button-first JSX layout:** Numbers (0–9), operators (+, −, ×, ÷, =), and extra actions (C, √) are rendered as buttons in rows.
- **Display:** Shows the expression as you click (e.g. `24 × 10`), then replaces it with the result after `=`.
- **Safe evaluation:** Uses `mathjs` to evaluate expressions instead of `eval`.
- **Operator normalization:** Before evaluating, the app converts UI symbols to parseable operators:
  - `×` → `*`
  - `÷` → `/`
  - `−` (Unicode minus) → `-`
  - `√10` → `sqrt(10)` (also supports `√( ... )`)
- **Result formatting:** If the result has a fractional part, it’s rounded to **max 5 decimal places**; integers are shown without decimals.
- **Post-`=` behavior:** After pressing `=`, the **next** button press clears the display (fresh input), using a simple `lastPressed` flag.
- **Clear:** `C` resets the display to `0`.

---

## Tech stack

- **React** (functional components + hooks)
- **mathjs** for expression parsing/evaluation
- (Optional) **Sass** if you want nested styles/variables

---

## How it works (logic highlights)

- **Click handler (`handleClick`)**
  - If the last key was `=`, clear the display and reset the flag.
  - Append the clicked value to the display.
- **Equals handler (`handleSum`)**
  - Normalize symbols (`× ÷ − √`).
  - Evaluate with `mathjs`.
  - Format: integers show as-is; non-integers round to 5 dp.
  - Set the `lastPressed` flag to `"="`.
- **Cancel handler (`handleCancel`)**
  - Set display to `0` and clear the flag.

---

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm start
