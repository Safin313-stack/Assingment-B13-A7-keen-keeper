import { useNavigate } from "react-router-dom";

function getStatusStyle(status) {
  if (status === "overdue") return { bg: "#fee2e2", color: "#b91c1c" };
  if (status === "almost due") return { bg: "#fef9c3", color: "#854d0e" };
  return { bg: "#dcfce7", color: "#166534" };
}

export default function FriendCard({ friend }) {
  const navigate = useNavigate();
  const style = getStatusStyle(friend.status);

  return (
    <div
      onClick={() => navigate("/friend/" + friend.id)}
      className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="flex flex-col items-center text-center gap-2">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full object-cover bg-gray-100"
          onError={(e) => {
            e.target.src =
              "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(friend.name) +
              "&background=1a3e2e&color=fff";
          }}
        />

        <div>
          <p className="font-semibold text-gray-800 text-sm">{friend.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            {friend.days_since_contact} days ago
          </p>
        </div>

        <span
          className="text-xs px-2.5 py-0.5 rounded-full font-medium"
          style={{ backgroundColor: style.bg, color: style.color }}
        >
          {friend.status}
        </span>

        <div className="flex flex-wrap justify-center gap-1">
          {friend.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


