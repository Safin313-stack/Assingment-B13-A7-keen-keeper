<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:1a1a3e,100:0a3d62&height=200&section=header&text=KeenKeeper&fontSize=58&fontColor=ffffff&fontAlignY=38&desc=A+friendship+tracking+app+built+with+React%2C+Vite+and+Recharts&descAlignY=60&descSize=15&descColor=94a3b8" width="100%"/>

<br/>

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-22c55e?style=flat-square)](https://recharts.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-0ea5e9?style=flat-square&logo=github)](https://safin313-stack.github.io/Assingment-B13-A7-keen-keeper/)
[![PH Batch](https://img.shields.io/badge/Programming%20Hero-Batch%2013-f97316?style=flat-square)](https://web.programming-hero.com)

<br/>

<a href="https://safin313-stack.github.io/Assingment-B13-A7-keen-keeper/">
  <img src="https://img.shields.io/badge/-%F0%9F%91%A5%20%20LIVE%20DEMO%20%20%E2%86%92-0a3d62?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

### 👥 What You Get

| 👤 Friend Profiles | 📊 Stats Chart | 🔍 Search | 🗂️ Filter | 🛣️ React Router | 📱 Responsive |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Add and manage your friends with full profile details | Recharts-powered visual stats of your friendships | Search friends by name instantly | Filter by category or status | Multi-page navigation with React Router | Clean layout on all screen sizes |

</div>

---

## 🖥️ Page Structure

```
╔══════════════════════════════════════════════════════════════╗
║  👥  KeenKeeper                     Home · Friends · Stats  ║  ← Navbar
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   Keep Track of the People          [ stats summary cards ] ║  ← Home / Banner
║   Who Matter Most                                            ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   🔍 Search...    [ Filter ▼ ]                               ║  ← Friends Page
║                                                              ║
║  ╔══════════════╗ ╔══════════════╗ ╔══════════════╗          ║
║  ║  👤 Friend 1 ║ ║  👤 Friend 2 ║ ║  👤 Friend 3 ║          ║
║  ║  Last met:   ║ ║  Last met:   ║ ║  Last met:   ║          ║
║  ║  Close friend║ ║  Colleague   ║ ║  Family      ║          ║
║  ╚══════════════╝ ╚══════════════╝ ╚══════════════╝          ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   📊 Friendship Stats     [ Recharts bar/pie chart ]         ║  ← Stats Page
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   404 Not Found — friendly error page                        ║  ← NotFound
╚══════════════════════════════════════════════════════════════╝
```

---

## ⚡ Key Features

### React Router — Multi-page Navigation

```jsx
// App.jsx — route structure
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/"          element={<Home />}     />
    <Route path="/friends"   element={<Friends />}  />
    <Route path="/stats"     element={<Stats />}    />
    <Route path="*"          element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Recharts — Visual Friendship Stats

```jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie } from 'recharts';

// Visualise friends by category
<BarChart data={categoryData}>
  <XAxis dataKey="category" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="count" fill="#38B2AC" />
</BarChart>
```

### Search and Filter

```jsx
const filtered = friends
  .filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
  .filter(f => activeFilter === 'All' || f.category === activeFilter);
```

### Friend Card Component

```jsx
// Each friend rendered as a reusable card
function FriendCard({ friend }) {
  return (
    <div className="card">
      <img src={friend.avatar} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.category}</p>
      <p>Last met: {friend.lastMet}</p>
    </div>
  );
}
```

---

## 📁 Project Structure

```
Assingment-B13-A7-keen-keeper/
│
├── 📄 index.html
├── ⚙️  vite.config.js
├── 🎨 tailwind.config.js
├── 📦 package.json
│
└── 📂 src/
    ├── 🚀 App.jsx            ← Root · router · layout
    ├── 🎨 index.css          ← Global styles
    │
    └── 📂 components/
        ├── Navbar.jsx        ← Navigation with React Router links
        ├── Home.jsx          ← Hero + summary stats
        ├── Friends.jsx       ← Friend grid with search and filter
        ├── FriendCard.jsx    ← Individual friend profile card
        ├── Stats.jsx         ← Recharts visualisation page
        └── NotFound.jsx      ← 404 error page
```

---

## 🚀 Getting Started

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://safin313-stack.github.io/Assingment-B13-A7-keen-keeper/](https://safin313-stack.github.io/Assingment-B13-A7-keen-keeper/)**

**Option 2 — Run locally**

```bash
git clone https://github.com/Safin313-stack/Assingment-B13-A7-keen-keeper.git
cd Assingment-B13-A7-keen-keeper
npm install
npm run dev
```

> App runs at `http://localhost:5173` ✅

**Option 3 — Build for production**

```bash
npm run build
```

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────────────────┐
│         React · Vite · React Router · Tailwind           │
├─────────────────────┬────────────────────────────────────┤
│  React.js           │  Component-based UI architecture  │
│  Vite               │  Fast dev server and build tool   │
│  React Router v6    │  Client-side multi-page routing   │
│  Tailwind CSS       │  Utility-first styling            │
│  Recharts           │  Chart and data visualisation     │
└─────────────────────┴────────────────────────────────────┘
```

---

## 📚 Key Concepts Used

```
React Router v6      → BrowserRouter · Routes · Route · Link · useNavigate
useState             → search query · active filter · friend list state
Array filter/map     → search and category filtering logic
Recharts             → BarChart · PieChart · Tooltip · XAxis · YAxis
Component reuse      → FriendCard used across Friends and Stats pages
404 handling         → wildcard route → NotFound component
Tailwind responsive  → grid-cols-1 → grid-cols-2 → grid-cols-3 breakpoints
Props passing        → friend data passed from parent to FriendCard
```

---

## 💡 Credits & Inspiration

Special thanks to **TCW - AI & coding resources** (Telegram Community)
for ideas, guidance, and coding support throughout this project. 🙏

---

<div align="center">

## 👤 Developer

<br/>

**Saharia Hassan Safin**
Front-end Developer · Programming Hero Batch 13

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Safin313-stack)
&nbsp;
[![Live Project](https://img.shields.io/badge/Live%20Project-Visit%20Now-0a3d62?style=for-the-badge&logo=vercel&logoColor=white)](https://safin313-stack.github.io/Assingment-B13-A7-keen-keeper/)

<br/>

*"Because friendships deserve more than just a contact list"* 👥

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a3d62,50:1a1a3e,100:0f0c29&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2025 Saharia Hassan Safin · ⭐ Star this repo if it helped you!</sub>

</div>
