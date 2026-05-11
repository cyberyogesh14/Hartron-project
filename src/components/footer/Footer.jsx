import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 md:px-24 py-16">

      {/* Top Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">

        <div className="bg-[#1a1a1a] border border-[#2b2b2b] px-5 py-6">
          <p className="text-sm">Locate Us</p>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2b2b2b] px-5 py-6">
          <p className="text-sm">Book a Test Ride</p>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2b2b2b] px-5 py-6">
          <p className="text-sm">Book a Service</p>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2b2b2b] px-5 py-6">
          <p className="text-sm">Configure Now</p>
        </div>

      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

        <div>
          <h2 className="text-xl font-semibold mb-5">Motorcycles</h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Bullet 350</li>
            <li>Hunter 350</li>
            <li>Classic 650</li>
            <li>Shotgun 650</li>
            <li>Himalayan 450</li>
            <li>Continental GT 650</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5">Shop</h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Ride Sure</li>
            <li>Rentals</li>
            <li>Tours</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5">Service</h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Book a Service</li>
            <li>Service Calculator</li>
            <li>Locate Us</li>
            <li>Owner's Manual</li>
            <li>Warranty</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5">Ride</h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Rides & Events</li>
            <li>Rentals</li>
            <li>Tours</li>
            <li>Royal Enfield App</li>
          </ul>
        </div>

      </div>

      {/* Contact */}
      <div className="border-t border-[#222] pt-10 flex flex-col items-center">

        <p className="text-gray-400 text-sm mb-5">
          For further queries or appointments reach us at:
        </p>

        <div className="flex flex-col md:flex-row gap-5 text-lg font-semibold mb-10">
          <p>📞 1800 210 0008</p>
          <p>✉ support@royalenfield.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">

          <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center">
            <FaXTwitter />
          </div>

          <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center">
            <FaYoutube />
          </div>

          <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center">
            <FaInstagram />
          </div>

          <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center">
            <FaLinkedinIn />
          </div>

        </div>

      </div>
    </footer>
  )
} 