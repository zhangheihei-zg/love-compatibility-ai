import LoveForm from "@/components/LoveForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full p-6 bg-white rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Love Compatibility Astrology
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Discover how compatible you and your partner truly are based on your
          birth dates.
        </p>

        <LoveForm />
      </div>
    </main>
  );
}
