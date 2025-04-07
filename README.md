# Freelancer Profile & Project Bidding Dashboard

A modern, responsive React application for freelancers to manage their profile and bid on projects. Built with React, TypeScript, Tailwind CSS, and Framer Motion.



## 🚀 Features

### Profile Management
- Professional profile display with skills and experience
- Portfolio links (GitHub, LinkedIn, Website)
- Interactive 5-star rating system
- Completed projects showcase
- Dark mode support with system preference detection
- Local storage persistence for profile data

### Project Bidding
- Browse available projects with detailed information
- Submit project bids with custom amounts and timelines
- Real-time bid status updates (Pending, Accepted, Rejected)
- Persistent bid history using local storage
- Smooth animations and transitions

## 🛠️ Technologies Used

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons
- **Local Storage** - Data Persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🎯 Usage

1. Visit the profile page to:
   - View and update your professional profile
   - Check your rating
   - See completed projects

2. Navigate to the Projects page to:
   - Browse available projects
   - Submit bids with custom proposals
   - Track bid statuses

## 🌙 Dark Mode

The application supports system-preferred dark mode and includes a manual toggle. Your preference is saved in local storage for future visits.

## 💾 Data Persistence

All data (profile, bids, dark mode preference) is stored in the browser's local storage, ensuring your information persists between sessions.

## 🔄 State Management

- Uses React's built-in useState and custom hooks
- Implements useLocalStorage for persistent data
- Manages complex state transitions for bid statuses

## 📱 Responsive Design

The dashboard is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## ⚡ Performance

- Optimized component rendering
- Efficient state updates
- Smooth animations with Framer Motion
- Lazy-loaded routes

## 🔒 Security

- Form validation for bid submissions
- Protected routes with React Router
- Sanitized data storage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.