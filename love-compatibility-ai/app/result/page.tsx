import ReportMock from "@/components/ReportMock";

export default function ResultPage({
  searchParams,
}: {
  searchParams: {
    you?: string;
    partner?: string;
    type?: string;
  };
}) {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Your Compatibility Report
        </h2>

        <ReportMock />
      </div>
    </main>
  );
}
