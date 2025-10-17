export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4">The Burner Method</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        A minimal, professional system designed for streamlined interaction.
      </p>
      <div className="flex gap-4">
        <a href="/dashboard" className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800">
          Go to Dashboard
        </a>
        <a href="/docs" className="px-6 py-3 rounded-lg border border-black hover:bg-gray-100">
          View Docs
        </a>
      </div>
    </main>
  );
}