<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a2e1a,50:1a3e2e,100:0a4a28&height=200&section=header&text=KeenKeeper&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Your+personal+shelf+of+meaningful+connections.+Track,+log,+and+nurture+the+friendships+that+matter+most.&descAlignY=60&descSize=13&descColor=94a3b8" width="100%"/>

<br/>

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Recharts](https://img.shields.io/badge/Recharts-22c55e?style=flat-square)](https://recharts.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify)](https://mellow-daffodil-fe2ee4.netlify.app/)
[![PH Batch](https://img.shields.io/badge/Programming%20Hero-Batch%2013-f97316?style=flat-square)](https://web.programming-hero.com)

<br/>

<a href="https://mellow-daffodil-fe2ee4.netlify.app/">
  <img src="https://img.shields.io/badge/-%F0%9F%91%A5%20%20LIVE%20DEMO%20%20%E2%86%92-1a3e2e?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

### 👥 What You Get

| 📋 Friend Dashboard | ⚡ Quick Check-In | 📜 Timeline | 📊 Analytics | 🔍 Filter | 📱 Responsive |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 4-column grid with status colors | Log Call · Text · Video in one tap | Full interaction history | Pie chart by interaction type | Filter timeline by type | Works on all screen sizes |

</div>

---

## 🖥️ Page Structure

```
╔══════════════════════════════════════════════════════════════╗
║  👥 KeenKeeper              Home · Timeline · Stats          ║  ← Navbar
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║        Friends to keep close in your life                    ║  ← Banner
║        [ + Add a Friend ]                                    ║
║                                                              ║
║   10 Friends · 3 On Track · 6 Need Attention · 12 This Month ║  ← Summary Cards
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ╔══════╗ ╔══════╗ ╔══════╗ ╔══════╗                        ║  ← Friend Grid
║  ║ 🟢   ║ ║ 🔴   ║ ║ 🟡   ║ ║ 🟢   ║                        ║
║  ║ Arjun║ ║ Rafi ║ ║Tanvir║ ║ Leo  ║                        ║
║  ║18days║ ║24days║ ║11days║ ║ 2days║                        ║
║  ╚══════╝ ╚══════╝ ╚══════╝ ╚══════╝                        ║
╠══════════════════════════════════════════════════════════════╣
║  Friend Details → Profile · Stats · Goal · Check-In Buttons  ║
╠══════════════════════════════════════════════════════════════╣
║  Timeline → All interactions · Call · Text · Video filter    ║
╠══════════════════════════════════════════════════════════════╣
║  Stats → Pie chart breakdown of interaction types            ║
╠══════════════════════════════════════════════════════════════╣
║                        Footer                                ║
╚══════════════════════════════════════════════════════════════╝
```

---

## ⚡ Key Features

### Friend Status System

```jsx
// Each friend in friends.json has a status field
// status can be: "overdue" | "almost due" | "on-track"

function getStatusStyle(status) {
  if (status === "overdue") return { bg: "#fee2e2", color: "#b91c1c" };
  if (status === "almost due") return { bg: "#fef9c3", color: "#854d0e" };
  return { bg: "#dcfce7", color: "#166534" };
}
```

### Quick Check-In with Toast

```jsx
// TimelineContext stores all check-in entries globally
function addEntry(friendName, type) {
  const entry = {
    id: Date.now(),
    friendName,
    type,              // "Call" | "Text" | "Video"
    date: new Date().toISOString(),
    title: type + " with " + friendName,
  };
  setEntries((prev) => [entry, ...prev]);
}

// Called from FriendDetails when user clicks a button
function handleCheckIn(type) {
  addEntry(friend.name, type);
  toast.success(type + " with " + friend.name + " logged!");
}
```

### Timeline Filter

```jsx
// Filter buttons on the Timeline page
const [filter, setFilter] = useState("All");

const filtered =
  filter === "All" ? entries : entries.filter((e) => e.type === filter);
```

### Loading Skeleton

```jsx
// Fake delay shows skeleton animation while data loads
useEffect(() => {
  setTimeout(() => {
    fetch("/friends.json")
      .then((r) => r.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, 1000);
}, []);
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
├── 🔀 vercel.json              ← SPA redirect config for Vercel
│
├── 📂 public/
│   ├── 📋 friends.json         ← 8 realistic friend profiles
│   └── 🔀 _redirects           ← Netlify SPA fix
│
└── 📂 src/
    ├── 🚀 App.jsx              ← Root with all routes
    ├── 🎨 index.css            ← Global styles
    ├── 🚀 main.jsx             ← Entry point with providers
    │
    ├── 📂 context/
    │   └── TimelineContext.jsx ← Global timeline state
    │
    ├── 📂 components/
    │   ├── Navbar.jsx          ← Sticky navbar with active links
    │   ├── Footer.jsx          ← Site footer with social links
    │   └── FriendCard.jsx      ← Friend card with status color
    │
    └── 📂 pages/
        ├── Home.jsx            ← Banner + summary cards + friends grid
        ├── FriendDetails.jsx   ← Profile · stats · goal · check-in
        ├── Timeline.jsx        ← Interaction history + type filters
        ├── Stats.jsx           ← Recharts pie chart analytics
        └── NotFound.jsx        ← Custom 404 page
```

---

## 🚀 Getting Started

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://mellow-daffodil-fe2ee4.netlify.app/](https://mellow-daffodil-fe2ee4.netlify.app/)**

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
│         React · Vite · Tailwind · React Router           │
├─────────────────────┬────────────────────────────────────┤
│  React.js           │  Component-based UI architecture  │
│  Vite               │  Lightning-fast dev + build tool  │
│  Tailwind CSS       │  Utility-first styling            │
│  React Router DOM   │  Client-side page navigation      │
│  Recharts           │  Pie chart for analytics page     │
│  React Hot Toast    │  Toast notification system        │
│  Lucide React       │  Icon library                     │
│  JSON               │  Friend data management           │
└─────────────────────┴────────────────────────────────────┘
```

---

## 📚 Key Concepts Used

```
useState()           → loading · filter · friend data state
useEffect()          → fetch friends.json on component mount
useContext()         → share timeline entries across all pages
useParams()          → read friend id from the URL
useNavigate()        → go back or redirect programmatically
Context API          → TimelineProvider wraps the whole app
React Router DOM     → nested routes · dynamic :id · 404 catch
Recharts             → PieChart · Pie · Cell · Tooltip · Legend
Array methods        → filter · find · map across friend data
Tailwind CSS         → responsive grid · utility-first styling
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
[![Live Project](https://img.shields.io/badge/Live%20Project-Visit%20Now-1a3e2e?style=for-the-badge&logo=netlify&logoColor=white)](https://mellow-daffodil-fe2ee4.netlify.app/)

<br/>

*"Never lose touch with the people who matter most"* 👥

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a4a28,50:1a3e2e,100:0a2e1a&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2026 Saharia Hassan Safin · ⭐ Star this repo if it helped you!</sub>

</div>
