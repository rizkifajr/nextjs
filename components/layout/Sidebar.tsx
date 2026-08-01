export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-zinc-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-6">
        EFEM Retail OS
      </h1>

      <ul className="space-y-3">
        <li>🏠 Dashboard</li>
        <li>💰 Sales</li>
        <li>📦 Inventory</li>
        <li>👥 Employee</li>
        <li>📈 Reports</li>
        <li>⚙️ Settings</li>
      </ul>
    </div>
  )
}
