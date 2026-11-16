# Temperature Converter

A simple, clean web tool that converts temperatures between **Celsius**, **Fahrenheit**, and **Kelvin**. Enter a value, choose the unit to convert from and to, and get the result instantly.

## Features

- Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K)
- Input validation with a clear message for empty or non-numeric values
- Result rounded to one decimal place
- Responsive layout that works on desktop and mobile
- Lightweight: no build step, no dependencies to install

## Built With

- HTML5
- [Tailwind CSS v4](https://tailwindcss.com/) (browser build)
- [daisyUI 5](https://daisyui.com/)
- Vanilla JavaScript (DOM manipulation)
- [Inter](https://fonts.google.com/specimen/Inter) font via Google Fonts

## Project Structure

```
temperature-converter/
├── assets/
│   └── favicon.png
├── index.html
├── script.js
└── style.css
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/temperature-converter.git
   ```
2. Open the project folder in your code editor.
3. Open `index.html` in a browser, or run it with the **Live Server** extension in VS Code.

An internet connection is required for the Tailwind CSS, daisyUI, and Google Fonts CDN links.

## How It Works

The converter uses Celsius as an intermediate unit, so only four formulas are needed to cover every combination:

1. The input value is read and converted to a number.
2. The value is converted from the selected "From" unit to Celsius.
3. The Celsius value is converted to the selected "To" unit.
4. The result is rounded to one decimal place and displayed.

### Formulas

| Conversion | Formula |
| --- | --- |
| Fahrenheit → Celsius | `(F − 32) × 5/9` |
| Kelvin → Celsius | `K − 273.15` |
| Celsius → Fahrenheit | `(C × 9/5) + 32` |
| Celsius → Kelvin | `C + 273.15` |

## Usage Example

| Input | From | To | Output |
| --- | --- | --- | --- |
| 34 | Celsius | Fahrenheit | 34 Celsius is 93.2 Fahrenheit |
| 93.2 | Fahrenheit | Kelvin | 93.2 Fahrenheit is 307.2 Kelvin |

## Author

**Hridoy**
