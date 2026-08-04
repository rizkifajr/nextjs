import KpiCard from "@/components/dashboard/KpiCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <KpiCard
          title="Sales Hari Ini"
          value="Rp12.500.000"
        />

        <KpiCard
          title="Target Bulan"
          value="Rp365.000.000"
        />

        <KpiCard
          title="Achievement"
          value="86%"
        />

        <KpiCard
          title="Traffic"
          value="124"
        />
      </div>
    </div>
  );
}
