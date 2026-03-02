export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="rounded-xl border bg-white p-4 flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-xl font-semibold mt-1">{value}</p>
      </div>

      <div
        className={`h-10 w-10 rounded-lg flex items-center justify-center ${color}`}
      >
        {icon}
      </div>
    </div>
  );
}