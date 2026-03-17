import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Nav";
import ReviewsSlider from "@/components/Reviews";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">



      {/* HERO */}

      
      <section className="bg-gradient-to-r from-[#0a1931] to-[#162a4d] text-white !pt-40  sm:py-20 md:py-28 text-center min-h-screen w-full">
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

       <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <h3 className="text-2xl sm:text-5xl font-extrabold text-[#0a1931] mb-6 relative text-center mb-12 text-4xl font-extrabold text-[var(--primary)]
           after:content-[''] after:block after:w-15 after:h-1 after:bg-[var(--accent)]
           after:mx-auto after:mt-4 after:rounded-sm">
            About Axilegal
          </h3>

          <div className="text-justify max-w-[850px] mx-auto text-[var(--text-muted)] text-[17px]">
            <p>
              Axilegal is a premier legal consultancy firm founded on the principles of
              transparency, efficiency, and deep local expertise. In a landscape where
              legal processes can often feel overwhelming, Axilegal stands as a bridge
              between complex Indian regulations and your peace of mind. Based in the
              heart of the National Capital Region, we specialize in providing
              end-to-end legal, financial, and compliance solutions specifically
              tailored for all markets.
            </p>

            <p>
              Inspired by the digital-first approach of India’s leading legal
              platforms, Axilegal combines cutting-edge technology with a personalized
              &quot;boots-on-the-ground&quot; touch. Whether you are an entrepreneur launching a
              Private Limited Company, a business owner navigating GST and ROC
              compliance, or an individual seeking airtight Property Documentation,
              our team ensures your work is handled with precision.
            </p>

            <p>
              What sets Axilegal apart is our hyper-local focus. We understand the
              specific nuances of NCR’s administrative landscape, allowing us to
              deliver results faster than national competitors. Our mission is to
              empower the local business community by offering fixed-price,
              high-quality legal services without the traditional hidden costs of
              law firms. At Axilegal, we don&apos;t just process paperwork; we build the
              legal foundation for your future success in India’s most vibrant
              economic zone.
            </p>
          </div>

        </div>
      </section>

<section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative overflow-hidden">
    
    <h3 className="text-2xl sm:text-5xl font-extrabold text-[#0a1931] mb-6 relative text-center mb-12 text-4xl font-extrabold text-[var(--primary)]
           after:content-[''] after:block after:w-15 after:h-1 after:bg-[var(--accent)]
           after:mx-auto after:mt-4 after:rounded-sm">
      Our Specialized Services
    </h3>

    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {[
        {
          title: "Taxation",
          price: "₹499",
          items: ["GST Registration", "ITR Filing", "Tax Audits"],
          link: "taxation.html"
        },
        {
          title: "Corporate",
          price: "₹499",
          items: ["Incorporation", "Compliance", "ROC Filing"],
          link: "corporate.html"
        },
        {
          title: "Litigation",
          price: "₹499",
          items: ["Civil/Criminal", "Legal Notice", "Representation"],
          link: "litigation.html"
        },
        {
          title: "Consumer",
          price: "₹1500",
          items: ["Forum Claims", "Dispute Resolution", "Legal Advice"],
          link: "consumer.html"
        },
        {
          title: "Cyber Fraud",
          price: "₹499",
          items: ["Fraud Recovery", "FIR Support", "Digital Evidence"],
          link: "cyber.html"
        },
        {
          title: "IP Rights",
          price: "₹999",
          items: ["Trademark", "Copyright", "Patent Filing"],
          link: "ip.html"
        },
        {
          title: "Documentation",
          price: "₹99",
          items: ["Affidavits", "Rental Agreements", "SPA / GPA"],
          link: "documentation.html"
        },
      ].map((service, i) => (
        <div
          key={i}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md border hover:-translate-y-2 transition transform"
        >
          <h4 className="text-lg sm:text-xl font-bold text-[#0a1931] mb-4">
            {service.title}
          </h4>

          <ul className="text-gray-600 text-sm space-y-2 mb-4 text-left">
            {service.items.map((item, j) => (
              <li key={j}>• {item}</li>
            ))}
          </ul>

          <p className="bg-yellow-50 text-center py-2 rounded mb-4 font-semibold text-sm sm:text-base">
            Starting from <span className="text-yellow-600">{service.price}</span>
          </p>

          <Link href={"https://calendly.com/chauhansaurabh425/30min"} target="_blank"
              rel="noopener noreferrer">
            Talk To Expert Now →
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>



      <ReviewsSlider/>

      <ContactForm/>

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
          <Link href={"https://calendly.com/chauhansaurabh425/30min"} target="_blank"
              rel="noopener noreferrer">
            BOOK CALL
          </Link>
        </button>
      </div>

    </main>
  );
}