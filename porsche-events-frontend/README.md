# Porsche Events Frontend

A modern, responsive React application for discovering and managing Porsche events. Built with TypeScript, Tailwind CSS, and Vite.

## Features

### 🎨 Dynamic Background System
- **Parallax Scrolling**: Beautiful Porsche images change as you scroll through different sections
- **Smooth Transitions**: Seamless background transitions with fade effects
- **Visual Indicators**: Background progress indicators show current section
- **High-Quality Images**: Curated Porsche photography from Unsplash
- **Responsive Design**: Optimized for all screen sizes

### 🏁 Event Management
- Browse and search Porsche events
- Filter by category, type, and price
- Event details with images and descriptions
- User authentication and profiles
- Event attendance tracking

### 🎯 User Experience
- Modern, sleek UI inspired by Porsche design
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation and search

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Development
The app will be available at `http://localhost:5173` (or the next available port).

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Loading.tsx
│   │   └── DynamicBackground.tsx  # Dynamic background system
│   ├── events/           # Event-specific components
│   │   ├── EventCard.tsx
│   │   └── EventList.tsx
│   └── layout/           # Layout components
│       └── Header.tsx
├── pages/                # Page components
│   ├── Home.tsx
│   ├── Events.tsx
│   ├── Login.tsx
│   └── Register.tsx
├── store/                # State management (Zustand)
│   ├── authStore.ts
│   └── eventsStore.ts
├── data/                 # Mock data and types
│   └── mockData.ts
├── types/                # TypeScript type definitions
│   └── index.ts
└── utils/                # Utility functions
    └── helpers.ts
```

## Dynamic Background System

The app features a sophisticated dynamic background system that changes Porsche images as users scroll:

### Background Images
- **White Porsche 911 on road** - Hero section
- **Silver Porsche 911 on side of road** - Events section  
- **Porsche emblem close-up** - Features section
- **Black Porsche 911 in parking lot** - About section
- **Vintage Porsche 356 C Speedster** - Contact section

### Implementation
- Uses CSS transitions for smooth image changes
- Scroll-based triggers for background switching
- Semi-transparent overlays for text readability
- Visual indicators showing current background
- Optimized for performance with passive scroll listeners

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Zustand** - State management
- **Vitest** - Testing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
