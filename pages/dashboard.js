import { useState } from "react";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLogs([...logs, { text: input }]);
    setInput("");
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Burner Dashboard</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border p-2 rounded"
          placeholder="Enter command..."
        />
        <button className="px-4 py-2 bg-black text-white rounded">Run</button>
      </form>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Logs</h2>
        <ul className="space-y-2">
          {logs.map((log, i) => (
            <li key={i} className="text-gray-800">> {log.text}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}