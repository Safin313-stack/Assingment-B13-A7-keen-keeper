import { useNavigate } from 'react-router-dom';
import { Home, HeartCrack } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center mb-6 shadow-inner">
        <HeartCrack className="w-12 h-12 text-indigo-400" />
      </div>
      <h1 className="text-7xl font-bold text-indigo-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        404
      </h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-3">Page Not Found</h2>
      <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
        Looks like this friendship doesn't exist — or you took a wrong turn. Let's get you back on track.
      </p>
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </button>
    </div>
  );
}
