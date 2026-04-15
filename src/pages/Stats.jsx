import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTimeline } from '../context/TimelineContext';
import { Phone, MessageSquare, Video, BarChart2 } from 'lucide-react';

const COLORS = ['#10B981', '#3B82F6', '#8B5CF6'];

const typeConfig = {
  Call: { icon: Phone, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  Text: { icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  Video: { icon: Video, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-100 rounded-xl shadow-lg px-4 py-3 text-sm">
        <p className="font-semibold text-slate-700">{payload[0].name}</p>
        <p className="text-indigo-600 font-bold">{payload[0].value} interactions</p>
      </div>
    );
  }
  return null;
};

export default function Stats() {
  const { entries } = useTimeline();

  const counts = {
    Call: entries.filter(e => e.type === 'Call').length,
    Text: entries.filter(e => e.type === 'Text').length,
    Video: entries.filter(e => e.type === 'Video').length,
  };

  const data = [
    { name: 'Call', value: counts.Call },
    { name: 'Text', value: counts.Text },
    { name: 'Video', value: counts.Video },
  ].filter(d => d.value > 0);

  const total = entries.length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Friendship Analytics
        </h1>
        <p className="text-slate-500 text-sm">A breakdown of how you've been connecting with your friends.</p>
      </div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {Object.entries(counts).map(([type, count], i) => {
          const cfg = typeConfig[type];
          return (
            <div key={type} className={`bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4 fade-in`} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className={`w-12 h-12 rounded-xl ${cfg.bg} ${cfg.color} border ${cfg.border} flex items-center justify-center`}>
                <cfg.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{count}</p>
                <p className="text-sm text-slate-400 font-medium">{type}s logged</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 fade-in">
        <div className="flex items-center gap-2 mb-6">
          <BarChart2 className="w-5 h-5 text-indigo-500" />
          <h2 className="font-semibold text-slate-800">Interaction Breakdown</h2>
          <span className="ml-auto text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg">{total} total</span>
        </div>

        {total === 0 ? (
          <div className="text-center py-20">
            <BarChart2 className="w-12 h-12 text-slate-200 mx-auto mb-3" />
            <p className="text-slate-400 font-medium">No data yet.</p>
            <p className="text-sm text-slate-300 mt-1">Log some check-ins from a friend's page to see your analytics!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => <span className="text-sm text-slate-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend detail */}
            <div className="space-y-3">
              {data.map((item, i) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-sm font-medium text-slate-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-800">{item.value}</span>
                    <span className="text-xs text-slate-400 ml-1">({Math.round((item.value / total) * 100)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
