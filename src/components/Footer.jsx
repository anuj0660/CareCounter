
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="visit" className="bg-[#082b23] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-4 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div>
            <h2 className="font-head text-2xl font-extrabold text-white">
              Care<span className="text-[#8BE0B0]">Counter</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Your trusted pharmacy management and medicine
              shopping destination. We aim to make healthcare
              products accessible, convenient and reliable.
            </p>

            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 hover:bg-[#8BE0B0] hover:text-[#123C32]">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 hover:bg-[#8BE0B0] hover:text-[#123C32]">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter"
                className="rounded-full bg-white/10 p-3 hover:bg-[#8BE0B0] hover:text-[#123C32]">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn"
                className="rounded-full bg-white/10 p-3 hover:bg-[#8BE0B0] hover:text-[#123C32]">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#8BE0B0]">Home</a></li>
              <li><a href="#products" className="hover:text-[#8BE0B0]">Our Products</a></li>
              <li><a href="#about" className="hover:text-[#8BE0B0]">About Us</a></li>
              <li><a href="#visit" className="hover:text-[#8BE0B0]">Contact Us</a></li>
              <li><a href="#cart" className="hover:text-[#8BE0B0]">Shopping Cart</a></li>
            </ul>
          </div>

          {/* Pharmacy Information */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Pharmacy Information
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Medicine Availability</li>
              <li>Prescription Guidelines</li>
              <li>Medicine Safety</li>
              <li>Healthcare Products</li>
              <li>Pharmacy Policies</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Contact Information
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#8BE0B0]" />
                <span>CareCounter Pharmacy,<br />Patna, Bihar, India</span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#8BE0B0]" />
                <span>+91 6204548507</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#8BE0B0]" />
                <span>support@carecounter.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-[#8BE0B0]" />
                <span>Available 24/7</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/20"></div>

        {/* Pharmacy Disclaimer */}
        <div className="rounded-lg bg-white/5 p-5">
          <h3 className="mb-2 font-bold text-[#8BE0B0]">
            Important Pharmacy Disclaimer
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            CareCounter provides general product information for
            educational and informational purposes. Prescription
            medicines are dispensed only against a valid prescription
            and in accordance with applicable laws. Always consult
            a qualified doctor or registered pharmacist before using
            any medicine. Product information does not replace
            professional medical advice.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} CareCounter Pharmacy.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#privacy" className="hover:text-[#8BE0B0]">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#8BE0B0]">
              Terms & Conditions
            </a>
            <a href="#visit" className="hover:text-[#8BE0B0]">
              Contact
            </a>
          </div>

        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          Designed with care for better healthcare accessibility.
        </p>

      </div>
    </footer>
  );
}

