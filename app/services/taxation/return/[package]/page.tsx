// app/services/taxation/return/[package]/page.tsx

import Link from "next/link";

type ReturnPackageKey =
  | "filing"
  | "tds"
  | "proprietorship"
  | "llp"
  | "company"
  | "notice";

type Package = {
  title: string;
  price: string;
  features: string[];
};

const returnFilingPackages: Record<ReturnPackageKey, Package[]> = {
  filing: [
    {
      title: "ITR Filing - Individual",
      price: "₹999",
      features: [
        "Expert Consultation",
        "Document Review",
        "ITR Filing",
      ],
    },
  ],
  tds: [
    {
      title: "TDS Filing",
      price: "₹1999",
      features: ["Form 24Q", "Form 26Q", "Form 27Q"],
    },
  ],
  proprietorship: [
    {
      title: "ITR Filing - Proprietorship",
      price: "₹1999",
      features: ["Expert Consultation", "Document Review"],
    },
  ],
  llp: [
    {
      title: "ITR Filing - LLP/Partnership",
      price: "₹3999",
      features: ["ITR Identification", "Document Review"],
    },
  ],
  company: [
    {
      title: "ITR Filing - Company",
      price: "₹5999",
      features: ["Document Review", "Acknowledgement Copy"],
    },
  ],
  notice: [
    {
      title: "Notice Reply",
      price: "₹999",
      features: ["Expert Consultation", "Reply Drafting"],
    },
  ],
};

export default async function ReturnPage({
  params,
}: {
  params: { package: ReturnPackageKey };
}) {


  const {package:selected} = await params;

  console.log("hey",selected)

  return (
    <div>

      {/* Package Switch */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">

        {Object.keys(returnFilingPackages).map((key) => {
          const k = key as ReturnPackageKey;

          return (
            <Link
              key={k}
              href={`/services/taxation/return/${k}`}
              className={`px-4 py-2 border rounded-full text-sm font-semibold transition ${
                selected === k
                  ? "bg-[#0a1931] text-white"
                  : "bg-white hover:bg-[#ffb400]"
              }`}
            >
              {k}
            </Link>
          );
        })}

      </div>

      {/* Package Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        {returnFilingPackages[selected].map((pkg, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-md bg-white"
          >
            <h3 className="text-xl font-bold mb-2">
              {pkg.title}
            </h3>

            <p className="text-2xl font-bold text-[#0a1931] mb-4">
              {pkg.price}
            </p>

            <ul className="list-disc list-inside text-sm mb-4">
              {pkg.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>

            <button className="w-full bg-[#0a1931] text-white py-2 rounded-lg">
              Select Package
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}