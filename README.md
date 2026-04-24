# Assignment-B13-A7-keen-keeper

# 👥 KeenKeeper

> Your personal shelf of meaningful connections. Track, log, and nurture the friendships that matter most.

---

## 🚀 Live Site

[🔗 Live Demo](https://mellow-daffodil-fe2ee4.netlify.app/)

---

## 🧰 Technologies Used

- **React.js** — Component-based UI
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling
- **React Router DOM** — Client-side page navigation
- **Recharts** — Pie chart for friendship analytics
- **React Hot Toast** — Toast notifications

---

## ✨ Key Features

1. **Friend Dashboard** — View all your friends as cards showing their contact status (Overdue, Almost Due, On Track), days since last contact, and tags — in a clean 4-column grid.
2. **Quick Check-In System** — Click into any friend's detail page and log a Call, Text, or Video interaction with one tap. Each entry is saved to your Timeline instantly with a toast notification.
3. **Timeline & Analytics** — The Timeline page shows a full history of all your interactions with filter options. The Stats page shows a pie chart breaking down your interaction types.

---

## 📦 Getting Started

```
git clone https://github.com/Safin313-stack/Assingment-B13-A7-keen-keeper.git
cd Assingment-B13-A7-keen-keeper
npm install
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navbar with active link highlighting
│   ├── Footer.jsx          # Site footer with social links
│   └── FriendCard.jsx      # Friend card with status color
├── context/
│   └── TimelineContext.jsx # Global state for timeline entries
├── pages/
│   ├── Home.jsx            # Banner + friends grid
│   ├── FriendDetails.jsx   # Profile, stats, check-in buttons
│   ├── Timeline.jsx        # Interaction history with filters
│   ├── Stats.jsx           # Pie chart analytics
│   └── NotFound.jsx        # 404 page
├── App.jsx                 # Routes setup
└── index.css               # Global styles
public/
└── friends.json            # 8 friend profiles
```

---

Made with ❤️ by [Saharia Hassan Safin](https://github.com/Safin313-stack)
