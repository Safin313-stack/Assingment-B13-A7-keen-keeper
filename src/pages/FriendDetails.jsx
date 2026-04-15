import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Video, Archive, Trash2, AlarmClock, Tag, Mail, Calendar, Target, Clock, ArrowLeft, Edit2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTimeline } from '../context/TimelineContext';

const statusConfig = {
  'overdue': { label: 'Overdue', classes: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  'almost due': { label: 'Almost Due', classes: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  'on-track': { label: 'On Track', classes: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
};

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/friends.json')
      .then(r => r.json())
      .then(data => {
        const found = data.find(f => f.id === parseInt(id));
        setFriend(found || null);
        setLoading(false);
      });
  }, [id]);

  const handleCheckIn = (type) => {
    addEntry(friend.name, type);
    toast.success(`${type} with ${friend.name} logged! 🎉`, {
      style: { borderRadius: '12px', background: '#1e1b3a', color: '#fff' },
      iconTheme: { primary: '#6366f1', secondary: '#fff' },
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-indigo-100 animate-pulse mx-auto mb-4" />
        <p className="text-slate-400">Loading friend details...</p>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500 text-lg">Friend not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 btn-primary inline-flex">Go Back</button>
      </div>
    );
  }

  const status = statusConfig[friend.status] || statusConfig['on-track'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 text-sm font-medium mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Friends
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-5">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm fade-in">
            <div className="text-center mb-5">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-2xl mx-auto mb-3 border-4 border-indigo-50 shadow-md object-cover bg-indigo-50"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=6366f1&color=fff&size=128`; }}
              />
              <h1 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>{friend.name}</h1>
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mt-2 ${status.classes}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                {status.label}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {friend.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium">
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{friend.bio}</p>

            {/* Email */}
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-xl px-3 py-2.5">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span className="truncate">{friend.email}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5 fade-in">
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">Actions</h3>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 hover:bg-amber-100 transition-all duration-200 font-medium text-sm">
              <AlarmClock className="w-4 h-4" />
              Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 border border-slate-100 hover:bg-slate-100 transition-all duration-200 font-medium text-sm">
              <Archive className="w-4 h-4" />
              Archive
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-all duration-200 font-medium text-sm">
              <Trash2 className="w-4 h-4" />
              Delete Friend
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-5">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 fade-in">
            {[
              { label: 'Days Since Contact', value: friend.days_since_contact, icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { label: 'Goal (days)', value: friend.goal, icon: Target, color: 'text-violet-600', bg: 'bg-violet-50' },
              { label: 'Next Due Date', value: new Date(friend.next_due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }), icon: Calendar, color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm fade-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <Target className="w-5 h-5 text-violet-500" />
                Relationship Goal
              </h3>
              <button className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg font-medium transition-all">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-slate-600 mb-1">Contact frequency target</p>
              <p className="text-2xl font-bold text-indigo-700">Every {friend.goal} days</p>
              <div className="mt-3 bg-white rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, (friend.days_since_contact / friend.goal) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {friend.days_since_contact} / {friend.goal} days used
              </p>
            </div>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm fade-in">
            <h3 className="font-semibold text-slate-800 mb-4">⚡ Quick Check-In</h3>
            <p className="text-sm text-slate-500 mb-4">Log an interaction and it'll appear in your Timeline.</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCheckIn('Call')}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-100 transition-all duration-200 hover:-translate-y-0.5 font-medium text-sm"
              >
                <Phone className="w-6 h-6" />
                Call
              </button>
              <button
                onClick={() => handleCheckIn('Text')}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-100 transition-all duration-200 hover:-translate-y-0.5 font-medium text-sm"
              >
                <MessageSquare className="w-6 h-6" />
                Text
              </button>
              <button
                onClick={() => handleCheckIn('Video')}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-100 transition-all duration-200 hover:-translate-y-0.5 font-medium text-sm"
              >
                <Video className="w-6 h-6" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
