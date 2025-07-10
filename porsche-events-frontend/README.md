# Porsche Events Frontend

A modern, responsive web application for Porsche enthusiasts to discover and attend car events in their area.

## 🚀 Features

### MVP Features
- **Event Discovery**: Browse and search for Porsche events
- **User Authentication**: Register, login, and manage user profiles
- **Event Filtering**: Filter events by category, type, location, and price
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with Porsche branding

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React 19**: Latest React features and performance optimizations
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Zustand**: Lightweight state management
- **React Router**: Client-side routing
- **Component Library**: Reusable, accessible components
- **Testing**: Unit tests with Vitest and React Testing Library

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Testing**: Vitest + React Testing Library
- **Icons**: Heroicons (SVG)
- **UI Components**: Headless UI

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd porsche-events-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- Unit tests for components in `src/components/**/*.test.tsx`
- Utility function tests in `src/utils/**/*.test.ts`
- Store tests in `src/store/**/*.test.ts`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Basic components (Button, Input, Card, etc.)
│   ├── events/         # Event-specific components
│   └── layout/         # Layout components (Header, Footer, etc.)
├── pages/              # Page components
├── store/              # State management (Zustand stores)
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
├── data/               # Mock data and constants
├── test/               # Test setup and utilities
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Porsche Red**: `#D5001C` - Primary brand color
- **Porsche Gold**: `#FFD700` - Accent color
- **Porsche Black**: `#1A1A1A` - Text and dark elements
- **Porsche Gray**: `#F5F5F5` - Background color

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Input**: Form inputs with validation states
- **Card**: Content containers with hover effects
- **Loading**: Loading spinners and states

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

### Code Style
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking

### Git Hooks
- Pre-commit hooks for linting and formatting
- Commit message conventions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- **Vercel**: Optimized for React applications
- **Netlify**: Easy deployment with Git integration
- **AWS S3 + CloudFront**: Scalable static hosting

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔐 Authentication

### Demo Credentials
For testing purposes, you can use these demo credentials:
- **Email**: `john.doe@example.com`
- **Password**: `password`

### Authentication Flow
1. User registers with email and password
2. JWT token is stored in localStorage
3. Protected routes redirect to login if not authenticated
4. User can logout to clear session

## 📊 State Management

### Stores
- **AuthStore**: User authentication and profile data
- **EventsStore**: Event data, filtering, and search

### Data Flow
1. Components subscribe to store state
2. Actions update store state
3. Components re-render with new data
4. Persistence handled by Zustand middleware

## 🧪 Testing Strategy

### Test Types
- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Full user flow testing (future)

### Testing Tools
- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **jsdom**: DOM environment for testing

## 🔮 Future Enhancements

### Planned Features
- **Event Details Page**: Detailed event information and RSVP
- **User Profile**: User preferences and event history
- **Event Creation**: Organizers can create new events
- **Reviews & Ratings**: User reviews for events
- **Notifications**: Email and push notifications
- **Maps Integration**: Google Maps for event locations
- **Mobile App**: React Native mobile application

### Technical Improvements
- **Performance**: Code splitting and lazy loading
- **Accessibility**: WCAG 2.1 compliance
- **SEO**: Server-side rendering and meta tags
- **Analytics**: User behavior tracking
- **Monitoring**: Error tracking and performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Ensure responsive design
- Follow accessibility guidelines
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Porsche**: For the inspiration and brand guidelines
- **React Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Vite**: For the fast build tool
- **Zustand**: For the lightweight state management

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for the Porsche community**
