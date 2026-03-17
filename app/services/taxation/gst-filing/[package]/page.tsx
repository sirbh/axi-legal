// app/services/taxation/gst/[package]/page.tsx

import Link from "next/link";

type GstPackageKey =
  | "registration"
  | "gst-filing"
  | "gst-cancellation"
  | "gst-revocation"
  | "gst-notice";

type Package = {
  title: string;
  price: string;
  features: string[];
};

const gstPackages: Record<GstPackageKey, Package[]> = {
  registration: [
    {
      title: "GST Registration",
      price: "₹499",
      features: ["Document Review", "GST Certificate"],
    },
  ],

  "gst-filing": [
    {
      title: "GST Filing Monthly",
      price: "₹999",
      features: ["GSTR-1", "GSTR-3B"],
    },
  ],

  "gst-cancellation": [
    {
      title: "GST Cancellation",
      price: "₹499",
      features: ["Application Filing"],
    },
  ],

  "gst-revocation": [
    {
      title: "GST Revocation",
      price: "₹499",
      features: ["Application Filing"],
    },
  ],

  "gst-notice": [
    {
      title: "GST Notice Reply",
      price: "₹999",
      features: ["Expert Consultation", "Reply Drafting"],
    },
  ],
};

export default async function GstPage({
  params,
}: {
  params: { package: GstPackageKey };
}) {
  const {package:selected} = await params;

  return (
    <div>

      {/* Package Switch */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">

        {Object.keys(gstPackages).map((key) => {
          const k = key as GstPackageKey;

          return (
            <Link
              key={k}
              href={`/services/taxation/gst-filing/${k}`}
              className={`px-4 py-2 border rounded-full text-sm font-semibold transition ${
                selected === k
                  ? "bg-[#0a1931] text-white"
                  : "bg-white hover:bg-[#ffb400]"
              }`}
            >
              {k.replace("gst-", "").replace("-", " ")}
            </Link>
          );
        })}

      </div>

      {/* Package Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        {gstPackages[selected].map((pkg, i) => (
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