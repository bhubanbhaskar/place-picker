# Place Picker

A modern React application that allows users to discover, select, and manage their favorite places. Built with Vite for fast development and optimized performance.

## Features

- 🗺️ Browse and select places from a curated list
- 💾 Save your favorite places locally
- 🗑️ Delete places with confirmation modal
- ⚡ Fast development experience with Vite
- 📱 Responsive design
- ⏳ Progress tracking for user actions
- 🎨 Clean and intuitive UI

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS
- **State Management**: React Hooks

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/place-picker.git
cd place-picker
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Features Overview

- **Browse Places**: View all available places on the main page
- **Select Places**: Click on a place to add it to your selection
- **Manage Selection**: View your selected places and manage them
- **Delete with Confirmation**: Remove places with a confirmation modal to prevent accidents

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
├── index.css               # Global styles
├── assets/                 # Static assets
├── components/
│   ├── DeleteConfirmation.jsx  # Delete confirmation modal
│   ├── Modal.jsx               # Reusable modal component
│   ├── Places.jsx              # Places display component
│   └── ProgressBar.jsx         # Progress indicator
└── utils/
    ├── data.js             # Places data
    └── loc.js              # Location utilities
```

## Components

- **DeleteConfirmation**: Modal component for confirming place deletion
- **Modal**: Reusable modal wrapper component
- **Places**: Displays and manages list of places
- **ProgressBar**: Shows progress of user actions

## Contributing

Contributions are welcome! To contribute:

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Commit your changes (`git commit -m 'Add your feature'`)
3. Push to the branch (`git push origin feature/your-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created as part of a React learning journey from Udemy.

---

**Happy place picking! 🎉**
