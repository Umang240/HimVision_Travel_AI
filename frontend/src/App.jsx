import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TripPlanner from "./components/PlannerForm";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <TripPlanner />
      <ChatBox />
    </div>
  );
}

export default App;