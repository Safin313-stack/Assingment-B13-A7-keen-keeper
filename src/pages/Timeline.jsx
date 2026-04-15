import { useState } from 'react';
import { Phone, MessageSquare, Video, Clock, Filter } from 'lucide-react';
import { useTimeline } from '../context/TimelineContext';

const typeConfig = {
  Call: { icon: Phone, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', label: 'Call' },
  Text: { icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', label: 'Text' },
  Video: { icon: Video, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', label: 'Video' },
};

export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Call', 'Text', 'Video'];

  const filtered = filter === 'All' ? entries : entries.filter(e => e.type === filter);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Timeline
        </h1>
        <p className="text-slate-500 text-sm">A history of all your check-ins and interactions.</p>
      </div>

      {/* Filter Buttons (C2) */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Filter className="w-4 h-4 text-slate-400" />
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              filter === f
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg">
          {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}
        </span>
      </div>

      {/* Timeline entries */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Clock className="w-12 h-12 text-slate-200 mx-auto mb-3" />
          <p className="text-slate-400 font-medium">No interactions logged yet.</p>
          <p className="text-sm text-slate-300 mt-1">Go to a friend's page and hit Call, Text or Video!</p>
        </div>
      ) : (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-violet-200 to-transparent" />

          <div className="space-y-4">
            {filtered.map((entry, i) => {
              const cfg = typeConfig[entry.type] || typeConfig.Call;
              return (
                <div key={entry.id} className="relative pl-16 fade-in" style={{ animationDelay: `${i * 0.04}s` }}>
                  {/* Icon bubble on line */}
                  <div className={`absolute left-0 w-12 h-12 rounded-xl ${cfg.bg} ${cfg.border} border-2 flex items-center justify-center shadow-sm`}>
                    <cfg.icon className={`w-5 h-5 ${cfg.color}`} />
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{entry.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(entry.date)}
                        </p>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color} border ${cfg.border} shrink-0`}>
                        {entry.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
