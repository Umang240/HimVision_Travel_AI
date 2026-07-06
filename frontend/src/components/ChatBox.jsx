import { useState } from "react";
import api from "../services/api";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await api.post("/chat", {
        message: message,
      });

      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      alert("Failed to get AI response");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10 mb-10">

      <h2 className="text-3xl font-bold mb-6">
        AI Travel Assistant
      </h2>

      <textarea
        rows="4"
        placeholder="Ask anything about travel..."
        className="w-full border rounded-lg p-4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div className="mt-6 bg-gray-100 p-5 rounded-lg">
          <h3 className="font-bold text-xl mb-2">AI Response</h3>

          <pre className="whitespace-pre-wrap">
            {response}
          </pre>
        </div>
      )}

    </section>
  );
}

export default ChatBox;