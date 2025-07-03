import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          AI Triage System
        </h1>
        <ul className="flex gap-6 text-md">
          <li>
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-300 transition">Features</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300 transition">About</a>
          </li>
          <li>
            <Link to="/login" className="bg-white text-blue-800 px-4 py-1.5 rounded hover:bg-blue-100 font-semibold transition">Login</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-24 bg-blue-50">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Empowering Hospitals with <span className="text-blue-700">AI Triage</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Instantly assess patient symptoms and vitals to prioritize care using cutting-edge AI. Reduce wait times and improve outcomes.
        </p>
        <div className="flex gap-4">
          <Link to="/signup" className="bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition text-lg">
            Get Started
          </Link>
          <Link to="/login" className="bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded hover:bg-blue-100 transition text-lg">
            Admin Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">Symptom Analysis</h4>
            <p className="text-gray-600">AI analyzes input symptoms and vitals for accurate triage decisions.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">Urgency Scoring</h4>
            <p className="text-gray-600">Get Low / Moderate / Critical scoring with visual breakdown.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">Visual Insights</h4>
            <p className="text-gray-600">Bar or radar charts help visualize triage levels in real time.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-blue-800 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg">
          We’re a passionate team on a mission to modernize hospital emergency response. Our AI Triage System enables doctors to make faster, smarter decisions and save more lives.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        © {new Date().getFullYear()} AI Triage System. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
