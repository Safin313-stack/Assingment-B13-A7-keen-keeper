import { Heart, ExternalLink, Send, Link } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-white text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>KeenKeeper</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Never lose touch with the people who matter most. KeenKeeper helps you nurture your friendships intentionally.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/timeline" className="hover:text-indigo-400 transition-colors">Timeline</a></li>
              <li><a href="/stats" className="hover:text-indigo-400 transition-colors">Stats</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/Safin313-stack" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/saharia-hassan-safin/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                <Link className="w-4 h-4" />
              </a>
              <a href="https://t.me/Safin313" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-colors duration-200">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <Heart className="w-3.5 h-3.5 text-rose-400 mx-1" fill="currentColor" /> for meaningful connections</p>
        </div>
      </div>
    </footer>
  );
}
