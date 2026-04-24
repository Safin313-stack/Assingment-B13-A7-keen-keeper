import { useState, useEffect } from "react";
import { UserPlus, Users, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import FriendCard from "../components/FriendCard";
import toast from "react-hot-toast";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // small delay so the loading state is visible
    setTimeout(() => {
      fetch("/friends.json")
        .then((r) => r.json())
        .then((data) => {
          setFriends(data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Couldn't load friends data");
          setLoading(false);
        });
    }, 1000);
  }, []);

  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter((f) => f.status === "almost due").length;
  const thisMonth = friends.filter((f) => f.days_since_contact <= 30).length;

  return (
    <div>
      {/* Banner */}
      <section className="text-center py-16 px-4 bg-white border-b border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, track, and
          nurture the relationships that matter most.
        </p>
        <button
          className="green-btn mx-auto"
          onClick={() => toast.success("Add Friend — coming soon!")}
        >
          <UserPlus size={16} />
          Add a Friend
        </button>

        {/* Summary cards */}
        {!loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-10">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-2xl font-bold text-gray-800">{total}</p>
              <p className="text-xs text-gray-400 mt-1">Total Friends</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-2xl font-bold text-gray-800">{onTrack}</p>
              <p className="text-xs text-gray-400 mt-1">On Track</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-2xl font-bold text-gray-800">{needAttention}</p>
              <p className="text-xs text-gray-400 mt-1">Need Attention</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-2xl font-bold text-gray-800">{thisMonth}</p>
              <p className="text-xs text-gray-400 mt-1">Interactions This Month</p>
            </div>
          </div>
        )}
      </section>

      {/* Friends grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="font-semibold text-gray-700 mb-5">Your Friends</h2>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 border border-gray-100 animate-pulse"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3" />
                <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
                <div className="h-2 bg-gray-100 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}




