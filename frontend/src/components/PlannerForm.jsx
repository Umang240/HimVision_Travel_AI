import { useState } from "react";
import api from "../services/api";

function TripPlanner() {
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travel_type: "",
    interests: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateItinerary = async () => {
    setLoading(true);

    try {
      const response = await api.post("/itinerary", {
        destination: formData.destination,
        days: Number(formData.days),
        budget: Number(formData.budget),
        travel_type: formData.travel_type,
        interests: formData.interests
          .split(",")
          .map((item) => item.trim()),
      });

      setResult(response.data.itinerary);
    } catch (error) {
      console.error(error);
      alert("Failed to generate itinerary");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        AI Trip Planner
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="days"
          placeholder="Days"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="travel_type"
          placeholder="Travel Type"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

      </div>

      <textarea
        name="interests"
        placeholder="Interests (Nature, Adventure, Trekking)"
        onChange={handleChange}
        className="border p-3 rounded-lg w-full mt-4"
      />

      <button
        onClick={generateItinerary}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Generating..." : "Generate Itinerary"}
      </button>

      {result && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            AI Generated Itinerary
          </h3>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>
        </div>
      )}

    </section>
  );
}

export default TripPlanner;