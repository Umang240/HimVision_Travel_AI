function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          HimVision Travel AI
        </h1>

        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;