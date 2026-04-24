import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Video, AlarmClock, Archive, Trash2, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { useTimeline } from "../context/TimelineContext";

function statusColor(status) {
  if (status === "overdue") return { bg: "#fee2e2", color: "#b91c1c" };
  if (status === "almost due") return { bg: "#fef9c3", color: "#854d0e" };
  return { bg: "#dcfce7", color: "#166534" };
}

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found || null);
        setLoading(false);
      });
  }, [id]);

  function handleCheckIn(type) {
    addEntry(friend.name, type);
    toast.success(type + " with " + friend.name + " logged!");
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-gray-400">
        Loading...
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 mb-4">Friend not found.</p>
        <button className="green-btn mx-auto" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const sc = statusColor(friend.status);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6"
      >
        <ArrowLeft size={15} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Profile card */}
          <div className="bg-white rounded-lg p-5 border border-gray-100 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 bg-gray-100"
              onError={(e) => {
                e.target.src =
                  "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(friend.name) +
                  "&background=1a3e2e&color=fff&size=80";
              }}
            />
            <p className="font-semibold text-gray-800">{friend.name}</p>
            <span
              className="text-xs px-2.5 py-0.5 rounded-full font-medium inline-block mt-1"
              style={{ backgroundColor: sc.bg, color: sc.color }}
            >
              {friend.status}
            </span>

            <div className="flex flex-wrap justify-center gap-1 mt-3">
              {friend.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-3 text-left leading-relaxed">
              {friend.bio}
            </p>
            <p className="text-xs text-gray-400 mt-2 text-left">{friend.email}</p>
          </div>

          {/* Action buttons */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 flex flex-col gap-2">
            <button className="flex items-center gap-2 text-sm px-3 py-2 rounded bg-yellow-50 text-yellow-800 hover:bg-yellow-100 border border-yellow-100">
              <AlarmClock size={15} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center gap-2 text-sm px-3 py-2 rounded bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200">
              <Archive size={15} /> Archive
            </button>
            <button className="flex items-center gap-2 text-sm px-3 py-2 rounded bg-red-50 text-red-700 hover:bg-red-100 border border-red-100">
              <Trash2 size={15} /> Delete
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <p className="text-2xl font-bold text-gray-800">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <p className="text-2xl font-bold text-gray-800">{friend.goal}</p>
              <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <p className="text-lg font-bold text-gray-800">
                {new Date(friend.next_due_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-400 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="bg-white rounded-lg p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium text-gray-700 text-sm">Relationship Goal</p>
              <button className="text-xs text-gray-400 border border-gray-200 rounded px-2.5 py-1 hover:bg-gray-50">
                Edit
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-1">Connect every:</p>
            <p className="text-xl font-bold" style={{ color: "#1a3e2e" }}>
              {friend.goal} days
            </p>
            <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  backgroundColor: "#1a3e2e",
                  width:
                    Math.min(
                      100,
                      Math.round((friend.days_since_contact / friend.goal) * 100)
                    ) + "%",
                }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {friend.days_since_contact} / {friend.goal} days
            </p>
          </div>

          {/* Quick check-in */}
          <div className="bg-white rounded-lg p-5 border border-gray-100">
            <p className="font-medium text-gray-700 text-sm mb-1">Quick Check-In</p>
            <p className="text-xs text-gray-400 mb-4">
              Log an interaction — it will show up in your Timeline.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCheckIn("Call")}
                className="flex flex-col items-center gap-1.5 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm text-gray-600"
              >
                <Phone size={20} />
                Call
              </button>
              <button
                onClick={() => handleCheckIn("Text")}
                className="flex flex-col items-center gap-1.5 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm text-gray-600"
              >
                <MessageSquare size={20} />
                Text
              </button>
              <button
                onClick={() => handleCheckIn("Video")}
                className="flex flex-col items-center gap-1.5 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm text-gray-600"
              >
                <Video size={20} />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


