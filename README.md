# 👥 KeenKeeper — Keep Your Friendships Alive

> A friendship tracking app that helps you stay intentional about the people who matter most.

## 🛠️ Technologies Used

- **React.js** (Vite) — UI framework
- **React Router DOM** — Client-side navigation
- **Tailwind CSS** — Utility-first styling
- **Recharts** — Friendship analytics pie chart
- **React Hot Toast** — Toast notifications
- **Lucide React** — Icon library

## ✨ Key Features

1. **Friend Dashboard** — View all friends as status-colored cards showing days since last contact, tags, and contact status (Overdue / Almost Due / On Track)
2. **Quick Check-In** — Log a Call, Text, or Video interaction from any friend's detail page; entries instantly appear in the Timeline
3. **Friendship Analytics** — Pie chart breaking down your interaction types (Calls, Texts, Videos) with a filterable Timeline history

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Safin313-stack/Assingment-B13-A7-keen-keeper.git
cd keen-keeper

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment

### GitHub Pages (Automatic)
This project is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

**Live URL:** https://Safin313-stack.github.io/Assingment-B13-A7-keen-keeper/

The app uses:
- Vite for optimized builds
- React Router for SPA routing
- GitHub Actions workflow for automated deployment

### Manual Deployment

To manually build and deploy:

```bash
npm run build
# The `dist/` folder contains production-ready files
```

## 📂 Project Structure

```
src/
├── components/      # Reusable React components
│   ├── ErrorBoundary.jsx
│   ├── FriendCard.jsx
│   ├── Footer.jsx
│   ├── LoadingSkeleton.jsx
│   └── Navbar.jsx
├── context/         # Context API for state management
│   └── TimelineContext.jsx
├── pages/          # Page components
│   ├── FriendDetails.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Stats.jsx
│   └── Timeline.jsx
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## 🔧 Configuration

See `.env.example` for available environment variables.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Safin313-stack**  
GitHub: https://github.com/Safin313-stack
