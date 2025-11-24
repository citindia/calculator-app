# Calculator App

A modern, feature-rich calculator application built with Next.js, React, and TypeScript. This project demonstrates both basic and advanced calculator interfaces with a clean, responsive design and dark theme support.

## 🚀 Features

### Basic Calculator

- **Four Operations**: Addition, Subtraction, Multiplication, and Division
- **Simple Interface**: Two number inputs with individual operation buttons
- **Real-time Results**: Instant calculation with result display
- **Reset Functionality**: Clear all inputs and results with one click

### Advanced Calculator

- **Operator Selection**: Dropdown menu with visual icons for operations
- **Streamlined Workflow**: Single calculate button after selecting operator
- **Enhanced UX**: More intuitive interface for complex calculations
- **Icon Integration**: Lucide React icons for better visual feedback

### Global Features

- **Dark/Light Theme**: Toggle between light and dark modes with smooth transitions
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Built with Shadcn UI components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation for better code quality

## 📸 Preview

### Basic Calculator

![Basic Calculator Preview](/public/preview/basic-calculator-preview.png)

### Advanced Calculator

![Advanced Calculator Preview](/public/preview/advanced-calculator-preview.png)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: Shadcn UI (New York style)
- **Icons**: Lucide React 0.554.0
- **Theme**: next-themes 0.4.6
- **Package Manager**: Bun (lockfile present)

## 📁 Project Structure

```
calculator-app/
├── public/
│   ├── preview/                 # Preview images
│   │   ├── basic-calculator-preview.png
│   │   └── advanced-calculator-preview.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── advanced/            # Advanced calculator page
│   │   │   └── page.tsx
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   ├── page.tsx             # Basic calculator page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── BasicCalculator.tsx  # Basic calculator component
│   │   ├── AdvancedCalculator.tsx # Advanced calculator component
│   │   ├── Header/
│   │   │   └── Header.tsx       # Navigation header
│   │   ├── Providers/
│   │   │   └── ThemeProvider.tsx # Theme context provider
│   │   ├── ThemeToggleButton.tsx # Dark/light mode toggle
│   │   └── shadcnui/            # Shadcn UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── select.tsx
│   ├── hooks/                   # Custom hooks (empty, ready for extension)
│   └── lib/
│       └── utils.ts             # Utility functions
├── components.json              # Shadcn UI configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x
- npm 11.x or Bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/citindia/calculator-app.git
cd calculator-app
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Run the development server:

```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun prod` - Run lint, build, and start production server

## 🎯 Usage

### Basic Calculator

1. Navigate to the homepage (`/`)
2. Enter two numbers in the input fields
3. Click on any operation button (Add, Subtract, Multiply, Divide)
4. View the result in the disabled total field
5. Use Reset to clear all fields

### Advanced Calculator

1. Navigate to `/advanced`
2. Enter the first number
3. Select an operator from the dropdown (with visual icons)
4. Enter the second number
5. Click Calculate to see the result
6. Use Reset to clear all fields

### Theme Toggle

- Click the sun/moon icon in the header to switch between light and dark themes
- Theme preference is maintained across page reloads

## 🔧 Development

### Code Style

- Follows Airbnb Style Guide
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for consistent formatting

### Component Architecture

- Functional components with React hooks
- Server-side rendering where appropriate
- Client components marked with `"use client"`
- Proper TypeScript typing throughout

### UI Framework

- Shadcn UI components for consistent design
- Tailwind CSS for styling
- CSS variables for theme switching
- Responsive design patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Saikat Sardar**

- GitHub: [@citindia](https://github.com/citindia)
- Project Homepage: [https://github.com/citindia/calculator-app](https://github.com/citindia/calculator-app)
