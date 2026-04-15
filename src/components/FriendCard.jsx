import { useNavigate } from 'react-router-dom';
import { Tag, Clock } from 'lucide-react';

const statusConfig = {
  'overdue': { label: 'Overdue', classes: 'bg-red-100 text-red-700 border border-red-200', dot: 'bg-red-500', card: 'border-red-200 hover:border-red-300' },
  'almost due': { label: 'Almost Due', classes: 'bg-amber-100 text-amber-700 border border-amber-200', dot: 'bg-amber-500', card: 'border-amber-200 hover:border-amber-300' },
  'on-track': { label: 'On Track', classes: 'bg-emerald-100 text-emerald-700 border border-emerald-200', dot: 'bg-emerald-500', card: 'border-emerald-200 hover:border-emerald-300' },
};

export default function FriendCard({ friend }) {
  const navigate = useNavigate();
  const status = statusConfig[friend.status] || statusConfig['on-track'];

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className={`bg-white rounded-2xl p-5 border-2 ${status.card} shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer fade-in`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-14 h-14 rounded-xl object-cover bg-indigo-50 border-2 border-white shadow"
          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=6366f1&color=fff`; }}
        />
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${status.classes}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
          {status.label}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-semibold text-slate-800 text-base mb-1 truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
        {friend.name}
      </h3>

      {/* Days since contact */}
      <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
        <Clock className="w-3.5 h-3.5" />
        <span>{friend.days_since_contact} days ago</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {friend.tags.map(tag => (
          <span key={tag} className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium">
            <Tag className="w-2.5 h-2.5" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
