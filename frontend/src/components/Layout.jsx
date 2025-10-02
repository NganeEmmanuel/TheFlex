import { Link } from "react-router-dom";
import flexLogo from "../assets/flex-logo.png"; // put the logo in src/assets

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#184C45] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={flexLogo} alt="Flex Logo" className="h-8 mr-2" />
          </Link>

          {/* Nav */}
          <nav className="space-x-6">
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <Link to="/property/FlatA" className="hover:text-gray-300">Property</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#184C45] text-white mt-8">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Join Section */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Join The Flex</h2>
            <p className="mb-6 text-sm leading-relaxed">
              Sign up now and stay up to date on our latest news and exclusive deals including 
              <span className="font-semibold"> 5% off your first stay!</span>
            </p>
            <form className="space-y-3">
              <div className="flex gap-3">
                <input type="text" placeholder="First name"
                  className="w-1/2 p-2 rounded bg-[#123730] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40" />
                <input type="text" placeholder="Last name"
                  className="w-1/2 p-2 rounded bg-[#123730] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40" />
              </div>
              <input type="email" placeholder="Email address"
                className="w-full p-2 rounded bg-[#123730] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <div className="flex gap-3">
                <select className="w-1/3 p-2 rounded bg-[#123730] text-white focus:outline-none focus:ring-2 focus:ring-white/40">
                  <option>GB +44</option>
                  <option>FR +33</option>
                  <option>DZ +213</option>
                </select>
                <input type="tel" placeholder="Phone number"
                  className="flex-1 p-2 rounded bg-[#123730] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40" />
              </div>
              <button type="submit"
                className="bg-white text-[#184C45] font-semibold px-4 py-2 rounded w-full hover:bg-gray-100 transition">
                <span className="inline-flex items-center justify-center gap-2">
                  <span>✈️</span> Subscribe
                </span>
              </button>
            </form>
          </div>

          {/* About Section */}
          <div>
            <h2 className="font-semibold text-lg mb-3">The Flex</h2>
            <p className="text-sm leading-relaxed">
              Professional property management services for landlords, flexible corporate lets for businesses and 
              quality accommodations for short-term and long-term guests.
            </p>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">📘</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300">📸</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">🔗</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
            <ul className="text-sm space-y-2">
              <li><span className="font-semibold">GB</span> United Kingdom <br /> +44 77 2374 5646</li>
              <li><span className="font-semibold">DZ</span> Algeria <br /> +33 7 57 59 22 41</li>
              <li><span className="font-semibold">FR</span> France <br /> +33 6 44 64 57 17</li>
              <li className="mt-3"><a href="mailto:info@theflex.global" className="hover:text-gray-300">info@theflex.global</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 border-t border-gray-600 text-sm">
          © 2025 The Flex. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
