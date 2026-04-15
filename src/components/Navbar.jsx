import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart2, Heart } from 'lucide-react';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-indigo-700 bg-indigo-100'
      : 'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              KeenKeeper
            </span>
          </NavLink>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={linkClass}>
              <Home className="w-4 h-4" />
              <span className="hidden sm:block">Home</span>
            </NavLink>
            <NavLink to="/timeline" className={linkClass}>
              <Clock className="w-4 h-4" />
              <span className="hidden sm:block">Timeline</span>
            </NavLink>
            <NavLink to="/stats" className={linkClass}>
              <BarChart2 className="w-4 h-4" />
              <span className="hidden sm:block">Stats</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
