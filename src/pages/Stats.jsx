import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTimeline } from "../context/TimelineContext";

const COLORS = ["#1a3e2e", "#4ade80", "#86efac"];

export default function Stats() {
  const { entries } = useTimeline();

  const counts = {
    Call: entries.filter((e) => e.type === "Call").length,
    Text: entries.filter((e) => e.type === "Text").length,
    Video: entries.filter((e) => e.type === "Video").length,
  };

  const data = Object.entries(counts)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">
        Friendship Analytics
      </h1>
      <p className="text-sm text-gray-400 mb-8">By Interaction Type</p>

      <div className="bg-white rounded-lg border border-gray-100 p-6">
        {data.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No data yet. Log some check-ins first!
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                paddingAngle={3}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

