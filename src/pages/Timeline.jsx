import { useState } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";
import { useTimeline } from "../context/TimelineContext";

const icons = {
  Call: Phone,
  Text: MessageSquare,
  Video: Video,
};

export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? entries : entries.filter((e) => e.type === filter);

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Timeline</h1>
      <p className="text-sm text-gray-400 mb-6">
        All your check-ins in one place.
      </p>

      {/* Filter — C2 requirement */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["All", "Call", "Text", "Video"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-1.5 text-sm rounded-full border"
            style={
              filter === f
                ? { backgroundColor: "#1a3e2e", color: "white", border: "1px solid #1a3e2e" }
                : { backgroundColor: "white", color: "#374151", border: "1px solid #e5e7eb" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-sm">
          No interactions logged yet. Go to a friend and hit Call, Text or Video!
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((entry) => {
            const Icon = icons[entry.type] || Phone;
            return (
              <div
                key={entry.id}
                className="bg-white rounded-lg px-4 py-3 border border-gray-100 flex items-center gap-4"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#e8f5e9" }}
                >
                  <Icon size={16} style={{ color: "#1a3e2e" }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {entry.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatDate(entry.date)}
                  </p>
                </div>
                <span
                  className="ml-auto text-xs px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: "#e8f5e9", color: "#1a3e2e" }}
                >
                  {entry.type}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}


