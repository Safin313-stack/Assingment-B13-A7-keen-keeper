export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-slate-200" />
            <div className="w-20 h-6 rounded-full bg-slate-200" />
          </div>
          <div className="h-5 bg-slate-200 rounded-lg mb-2 w-3/4" />
          <div className="h-4 bg-slate-100 rounded-lg mb-3 w-1/2" />
          <div className="flex gap-1.5">
            <div className="h-6 w-16 rounded-full bg-slate-100" />
            <div className="h-6 w-20 rounded-full bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
