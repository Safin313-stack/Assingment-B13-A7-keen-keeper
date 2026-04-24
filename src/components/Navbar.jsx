import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-xl" style={{ color: "#1a3e2e" }}>
          KeenKeeper
        </span>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium " +
              (isActive
                ? "text-white"
                : "text-gray-600 hover:bg-gray-100")
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#1a3e2e" } : {}
            }
          >
            <Home size={15} />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              "flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium " +
              (isActive
                ? "text-white"
                : "text-gray-600 hover:bg-gray-100")
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#1a3e2e" } : {}
            }
          >
            <Clock size={15} />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              "flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium " +
              (isActive
                ? "text-white"
                : "text-gray-600 hover:bg-gray-100")
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#1a3e2e" } : {}
            }
          >
            <BarChart2 size={15} />
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
}


