import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-zinc-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-6">
        EFEM Retail OS
      </h1>

      <ul className="space-y-3">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/sales">Sales</Link>
        </li>

        <li>
          <Link href="/inventory">Inventory</Link>
        </li>

        <li>
          <Link href="/employee">Employee</Link>
        </li>

        <li>
          <Link href="/reports">Reports</Link>
        </li>

        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
