import { useState, useEffect } from 'react';
import { UserPlus, Users, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import FriendCard from '../components/FriendCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import toast from 'react-hot-toast';

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/friends.json')
        .then(r => r.json())
        .then(data => {
          setFriends(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          toast.error('Failed to load friends data.');
        });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const overdue = friends.filter(f => f.status === 'overdue').length;
  const almostDue = friends.filter(f => f.status === 'almost due').length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;

  const summaryCards = [
    { label: 'Total Friends', value: friends.length, icon: Users, color: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-100' },
    { label: 'Overdue', value: overdue, icon: AlertCircle, color: 'bg-red-50 text-red-600', border: 'border-red-100' },
    { label: 'Almost Due', value: almostDue, icon: Clock, color: 'bg-amber-50 text-amber-600', border: 'border-amber-100' },
    { label: 'On Track', value: onTrack, icon: CheckCircle, color: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-100' },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-violet-400/20 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-white/30">
            🤝 Your Friendship Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Keep Your<br />Friendships Alive
          </h1>
          <p className="text-lg text-indigo-100 max-w-xl mx-auto mb-8">
            Stay intentional with the people who matter. Track, check in, and never let a meaningful connection slip away.
          </p>
          <button
            onClick={() => toast.success('Add Friend feature coming soon!')}
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <UserPlus className="w-5 h-5" />
            Add a Friend
          </button>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {summaryCards.map((card, i) => (
              <div key={i} className={`bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-200`}>
                <card.icon className="w-6 h-6 mx-auto mb-2 text-white/90" />
                <div className="text-3xl font-bold text-white">{loading ? '—' : card.value}</div>
                <div className="text-xs text-indigo-200 mt-0.5 font-medium">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friends Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Friends
            </h2>
            <p className="text-slate-500 text-sm mt-0.5">Click any card to view details & check in</p>
          </div>
          {!loading && (
            <span className="text-sm text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg font-medium">
              {friends.length} connections
            </span>
          )}
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {friends.map((friend, i) => (
              <div key={friend.id} style={{ animationDelay: `${i * 0.05}s` }}>
                <FriendCard friend={friend} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
