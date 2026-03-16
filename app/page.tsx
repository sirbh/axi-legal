import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Nav";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* TOP BAR */}
      <div className="bg-yellow-400 text-center text-xs sm:text-sm font-semibold py-2 px-2">
        Consultation Fee: ₹499 for 30 Minutes
      </div>

      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0a1931] to-[#162a4d] text-white py-16 sm:py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Legal Services For All Your Needs
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10">
            Expert legal assistance for taxation, documentation,
            registrations and consultations.
          </p>

          <button className="bg-yellow-400 text-[#0a1931] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:-translate-y-1 transition">
            <Link href={"https://calendly.com/chauhansaurabh425/30min"} target="_blank"
  rel="noopener noreferrer">
                Book Consultation
            </Link>
           
          </button>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1931] mb-6">
            About Axilegal
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Axilegal provides professional legal and compliance services
            designed for individuals, startups and businesses. Our
            experienced team ensures that your legal processes are smooth,
            transparent and efficient.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            From taxation and GST to documentation and registrations,
            we offer affordable and reliable legal support tailored
            to your needs.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0a1931] mb-12 sm:mb-16">
            Our Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {[
              {
                title: "Tax Filing",
                price: "₹999",
                items: ["Income Tax Return", "TDS Filing", "Notice Reply"]
              },
              {
                title: "GST Services",
                price: "₹1499",
                items: ["GST Registration", "GST Filing", "GST Notice Reply"]
              },
              {
                title: "Business Setup",
                price: "₹2999",
                items: ["Proprietorship", "LLP Registration", "Startup Docs"]
              },
              {
                title: "Legal Consultation",
                price: "₹499",
                items: ["30 Min Consultation", "Legal Advice", "Case Guidance"]
              }
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md border hover:-translate-y-2 transition"
              >

                <h4 className="text-lg sm:text-xl font-bold text-[#0a1931] mb-4 text-center">
                  {service.title}
                </h4>

                <div className="bg-yellow-50 text-center py-2 rounded mb-4 font-semibold text-sm sm:text-base">
                  Starting from <span className="text-yellow-600">{service.price}</span>
                </div>

                <ul className="text-gray-600 text-sm space-y-2 mb-6">
                  {service.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>

                <button className="w-full font-semibold text-[#0a1931] hover:text-yellow-500 text-sm sm:text-base">
                  Learn More →
                </button>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1931] mb-10 sm:mb-12">
            Client Reviews
          </h3>

          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-10">

            <p className="italic text-base sm:text-lg text-gray-700 mb-6">
              “Excellent service and professional guidance. Filing my taxes
              became incredibly simple thanks to Axilegal.”
            </p>

            <strong className="text-[#0a1931] uppercase tracking-wider text-sm sm:text-base">
              Rahul Sharma
            </strong>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6">

          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0a1931] mb-8 sm:mb-10">
            Contact Us
          </h3>

          <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8">

            <ContactForm/>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1931] text-white py-12 sm:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

          <div>
            <h4 className="text-yellow-400 font-bold mb-4">Axilegal</h4>
            <p className="text-sm text-gray-300">
              Affordable legal services for individuals and businesses.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-400 font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Tax Filing</li>
              <li>GST Services</li>
              <li>Business Registration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email Support</li>
              <li>Live Chat</li>
              <li>Help Center</li>
            </ul>
          </div>

        </div>

        <div className="text-center text-sm text-gray-400 mt-10">
          © 2026 Axilegal. All rights reserved.
        </div>
      </footer>

      {/* CHAT BUTTON */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
        <button className="bg-green-500 text-white px-5 py-3 rounded-full shadow-lg text-sm sm:text-base">
          Chat on WhatsApp
        </button>
      </div>

    </main>
  );
}